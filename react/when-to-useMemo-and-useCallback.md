## When to `useMemo` and `useCallback`
최적화에는 비용이 있기 마련이며 무조건 유익한것은 아닙니다. 이 글에서는 useMemo와 useCallback을 사용함으로써 발생되는 비용과 혜택을 설명해보겠습니다.

```jsx
function CandyDispenser() {
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
  const [candies, setCandies] = React.useState(initialCandies)
  const dispense = candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map(candy => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
```

이제 질문을 하나 드리겠습니다. 위의 코드를 수정해 볼건데요, 수정 전의 코드와 수정 후의 코드중 성능면에서 어떤 코드가 더 나은지 선택해주시면 되겠습니다.

- `useCallback`

```jsx
const dispense = useCallback((candy) => {
  setCandies((allCandies) => allCandies.filter((c) => c !== candy));
}, []);
```

- 일반 함수

```jsx
const dispense = (candy) => {
  setCandies((allCandies) => allCandies.filter((c) => c !== candy));
};
```

위 둘중에 어느 코드가 성능이 더 좋을까요?

### 왜 `useCallback`의 사용이 더 나쁠까?
우리가 위의 예제, 아니 리액트를 떠나서 생각해야 할 부분이 있습니다. **모든 라인에 있는 코드는 실행이 될때 비용을 수반합니다.**   

```jsx
// 일반 함수
const dispense = (candy) => {
  setCandies((allCandies) => allCandies.filter((c) => c !== candy));
};


// useCallback
const dispense = (candy) => {
  setCandies((allCandies) => allCandies.filter((c) => c !== candy));
};

const dispenseCallback = useCallback(dispense, []);
```


`dispense` 함수는 같은 일을 수행하지만 `useCallback` 버전의 예시가 더 많은 일을 하고있습니다. `useCallback` 버전은 함수를 정의하는 일 뿐만 아니라 다양한 일(프로퍼티의 셋팅/논리적인 표현식의 실행)을 위해 배열(`[]`)을 정의해줘야 하죠. 그래서 두개의 예시에서 컴포넌트가 매순간 랜더링 될때마다 자바스크립트는 메모리에 함수를 정의하게 되며 `useCallback`이 어떻게 사용되는지에 따라 메모리에 더 많은 함수가 정의 될 수가 있는겁니다.   

그리고 또 하나 말씀드리고 싶은 것은 컴포넌트가 두번째로 랜더됐을 때 기존에 있던 `dispense` 함수는 가비지 컬렉터에 수집되며 새로운 함수가 생성이 됩니다. 그런데 `useCallback`을 사용하게 된다면 기존의 함수는 가비지 컬렉터에 수집되지 않고 새로운 함수가 생성이 되어버리죠. 즉, 메모리 사용 측면에서 비효율적이라는 것입니다.   

관련된 내용으로 만약 `useCallback`의 dependency 배열 안의 종속 값들을 사용한다면 리액트는 전에 생성된 함수의 참조(reference)로 배열 안에 있는 값을 계속 가지고 있을 겁니다. 왜냐하면 메모이제이션은 전과 같은 종속 값들을 받게되는 경우, 전에 가지고 있던 값들을 저장해서 그대로 리턴해준다는 뜻이니까요. 이미 눈치채셨을수도 있지만 리액트는 동일성 체크를 위해 종속된 값들의 참조를 가지고 있다는 뜻입니다.

### `useMemo`는 어떻게 다르면서도 비슷할까?
`useMemo`는 어떤 타입의 값이든 메모이제이션의 사용을 가능케 한다는 부분을 제외하곤 `useCallback`과 비슷합니다. `useMemo`는 값을 리턴하는 함수를 받고 해당 함수의 리턴 값이 필요할때만 사용됩니다. (보통 dependency 배열안의 종속값들이 렌더시에 변화할때마다 한번 발생합니다.)

```jsx
const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']

const initialCandies = useMemo(() => ['snickers', 'skittles', 'twix', 'milky way'], [])
```

`initialCandies` 배열이 랜더시에 다시 만들어지는 문제는 해결하기는 했지만 이렇게 해서 발생하는 효율은 그렇게 좋지는 않습니다. 오히려 코드가 좀 더 복잡해지기만 할 뿐이죠. 사실 `useMemo`를 사용하는게 더 비효율적일수 있어요. 왜냐하면 위에서 말했듯이 함수를 호출하면서 코드가 메모리에 할당될 테니까요.   

위의 예시를 어떻게 하면 더 효율적으로 수정할 수 있을까요?

```jsx
const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']

function CandyDispenser() {
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
  const [candies, setCandies] = useState(initialCandies)
}
```

그런데 항상 이렇게 할수있는게 아니겠죠. 왜냐하면 함수에서 쓰이는 값들은 `props`를 통해 내려온걸 수도 있고 함수 안에서 선언되어야하는 변수일수도 있을테니까요.   
제가 말하고자 하는 부분은 근데 이게 아닙니다. **위의 코드를 최적화 함으로서 얻어지는 효율은 너무나 작아서 어떻게 하면 프로젝트를 개선할 수 있을까를 생각하며 시간을 보내는편이 훨씬 나을겁니다.**

### 그래서 중요한것은?
**성능 개선은 공짜가 아닙니다. 항상 비용이 들기 마련이고 성능개선을 함으로써 얻어지는 이득이 꼭 그 비용을 상쇄할수 있는건 아니라는겁니다.** 그러므로 최적화는 책임감을 가지고 사용해야합니다.

### 그렇다면 언제 `useMemo`와 `useCallback`을 사용해야 할까요?
`useMemo`와 `useCallback`이 hook으로 만들어진건 여러 이유가 있습니다.   

1. 참조 동일성 (Referential equality)
2. 비용이 많이 드는 계산 (Computationally expensive calculations)

#### 참조 동일성 (Referential equality)

```jsx
true === true // true
false === false // true
1 === 1 // true
'a' === 'a' // true
{} === {} // false
[] === [] // false
() => {} === () => {} // false
const z = {}
z === z // true
// NOTE: React actually uses Object.is, but it's very similar to ===
```

리액트에서는 참조 동일성을 생각해야 하는 두가지 경우가 있습니다.

#### Dependencies lists

```jsx
function Foo({ bar, baz }) {
  const options = { bar, baz };
  useEffect(() => {
    buzz(options);
  }, [options]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}

function Blub() {
  return <Foo bar="bar value" baz={3} />;
}
```

위의 코드에 문제가 있는데요. `useEffect`는 `options`라는 변수를 대상으로 랜더되는 순간마다 **참조 동일성** 체크를 할겁니다. 그렇게 된다면 `options`는 매 순간마다 새로 만들어지게 되므로 컴포넌트가 랜더되고 `options`가 바뀌었는지 체크할때 항상 `true`로 판별이 되겠죠? 즉, `useEffect` 콜백은 `options` 안의 `bar`와 `baz`가 바뀌었을때 호출되는게 아니라 랜더되는 순간마다 호출이 된다는겁니다.   

이 문제를 해결하기 위해 두가지를 고쳐야 합니다.

```jsx
// option 1
function Foo({ bar, baz }) {
  useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}
```

정말 좋은 방법이죠. 만약에 예제가 진짜였다면 저는 이렇게 고쳤을겁니다.   

그런데 만약 `bar`나 `baz`가 객체/배열/함수와 같이 원시타입이 아닌 경우 어떻게 할까요?   

```jsx
function Blub() {
  const bar = () => {};
  const baz = [1, 2, 3];
  return <Foo bar={bar} baz={baz} />;
}
```

위의 경우가 바로 `useCallback`과 `useMemo`가 만들어진 이유입니다. 그래서 이렇게 아래처럼 고치면 될거같네요.

```jsx
function Foo({ bar, baz }) {
  useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]);
  return <div>foobar</div>;
}

function Blub() {
  const bar = useCallback(() => {}, []);
  const baz = useMemo(() => [1, 2, 3], []);
  return <Foo bar={bar} baz={baz} />;
}
```

### `React.memo`

```jsx
function CountButton({ onClick, count }) {
  return <button onClick={onClick}>{count}</button>;
}

function DualCounter() {
  const [count1, setCount1] = useState(0);
  const increment1 = () => setCount1((c) => c + 1);
  const [count2, setCount2] = useState(0);
  const increment2 = () => setCount2((c) => c + 1);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
```

두개의 버튼중 하나의 버튼이라도 클릭이 된다면 `DualCounter`의 상태(state)는 변하게 되고 두개의 `CountButton` 컴포넌트도 리랜더링을 하게 됩니다. 그런데 실질적으로는 클릭한 함수의 컴포넌트만 다시 랜더 되어야하지 않을까요? 이것을 우리는 “불필요한 리랜더”(unnecessary re-render)라고 부릅니다.    

**하지만 대부분의 경우 불필요한 리랜더를 크게 신경쓰지 않아도 됩니다.** 리액트는 굉장히 빠르고 불필요한 리랜더를 해결하는것보다 중요한 일들이 있으니까요. 사실 곧 보여드릴 최적화가 필요한 예시는 필자가 리액트를 가지고 일하는 기간동안 한번도 본적이 없을 정도로 굉장히 희박한 케이스입니다.   

그러나 상호작용이 가능한 그래프나 차트, 애니메이션등과 같이 랜더링이 발생할때 상당한 시간이 걸리게되는 상황들도 있습니다. 다행히도 리액트의 실용적인 속성 덕분에 해결할 수 있는 방법이 존재합니다.   

```jsx
const CountButton = React.memo(function CountButton({ onClick, count }) {
  return <button onClick={onClick}>{count}</button>;
});
```

이제 리액트는 `CountButton`의 `props`가 변할때만 다시 랜더링합니다! 와! 그런데 아직 끝난게 아니에요. 위에서 이야기한 참조 동일성(Referential equality)을 기억하시나요? `DualCounter` 함수형 컴포넌트에서 함수 `increment1`과 `increment2` 함수를 선언했는데요 이 말은 즉, `DualCounter` 컴포넌트가 랜더링 될때마다 안에서 선언한 함수들은 새로 만들어질것이고 리액트는 두개의 `CountButton` 컴포넌트를 어쨌거나 다시 랜더링 할거라는거죠.   

그래서 아래의 예시는 `useCallback`과 `React.memo`를 사용해 함수의 재생성과 변수의 재선언을 방지할 수 있는 개선된 코드입니다.   

```jsx
const CountButton = React.memo(function CountButton({onClick, count}) {
  return <button onClick={onClick}>{count}</button>
})

function DualCounter() {
  const [count1, setCount1] = React.useState(0)
  const increment1 = React.useCallback(() => setCount1(c => c + 1), [])
  const [count2, setCount2] = React.useState(0)
  const increment2 = React.useCallback(() => setCount2(c => c + 1), [])
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  )
}
```

이렇게해서 CountButton의 “불필요한 리랜더”를 방지할 수 있습니다.   

다시 말씀드리자면 저는 `React.memo`(그리고 `memo`의 친구들인 `PureComponent`와 `shouldComponentUpdate`)를 기준없이 사용하는걸 반대합니다. 왜냐하면 최적화에는 비용이 따르기 마련이며 코드를 작성하는 사람은 `memo`의 사용으로 인한 비용과 그리고 그에 따른 이득을 생각하여 `memo`의 사용이 실질적으로 나에게 도움이 될것인지, 그리고 항상 코드가 의도한 대로 동작하여 `memo`를 사용함에 있어서 오는 이점을 취할 수 있을 것인지를 확인해야 합니다.   

### 비용이 많이 드는 계산 (Computationally expensive calculations)
비용이 많이 드는 계산의 경우도 `useMemo`가 훅으로 만들어진 또 다른 이유입니다.(`useCallback`은 제외) `useMemo`의 사용은 아래와 같은 장점을 가지고 있습니다.   

```jsx
function RenderPrimes({ iterations, multiplier }) {
  const primes = calculatePrimes(iterations, multiplier);
  return <div>Primes! {primes}</div>;
}
```

`iterations`와 `multiplier`가 어떤 일을 하는지 봐서 아시겠지만 예제 함수의 계산 속도는 꽤나 느릴겁니다. 그리고 여기서 우리가 할 수 있는 일은 없어요. 하드웨어에 마법을 걸어 속도를 빠르게 만들지는 못하겠죠. 하지만 `useMemo`를 사용해 연속으로 같은 값을 다시 계산하지 않도록 만들어 속도를 향상시키는 방법은 있습니다.   

```jsx
function RenderPrimes({ iterations, multiplier }) {
  const primes = useMemo(() => calculatePrimes(iterations, multiplier), [
    iterations,
    multiplier,
  ]);

  return <div>Primes! {primes}</div>;
}
```

이 방법이 먹히는 이유는 비록 컴포넌트가 매번 랜더될때마다 `primes`를 계산하는 함수를 정의했지만, 리액트는 소수의 값이 필요할 때만 해당 함수를 호출하기 때문입니다. 덧붙이자면 리액트는 또한 전에 입력되었던 값을 저장하고 있으며 같은 입력값에 한하여 같은 리턴값을 내보냅니다. 이렇게 메모이제이션은 동작합니다.   

### 결론
분명히 말씀드리자면 `useCallback`과 `useMemo`를 사용함으로써

1. 동료가 보기에 코드가 더 복잡해 질 수 있고
2. dependencies 배열을 잘못 사용할수도 있으며
3. 내부 훅을 호출함으로써 성능상 안쓰느니 못하게 만들 수도 있고
4. dependency들과 memoized된 값들이 가비지 컬랙터에 수집이 안되게 만들수도 있습니다. 굳이 성능상 이점을 원한다면 위 비용들의 발생을 감수할수도 있지만 손익분실 계산이 최우선이 되어야 합니다.


#### `useMemo`와 `useCallback`을 사용해야 하는 경우
1. 하위트리에 많은 Consumer가 있는 값을 Context Provider에 전달해야 하는 경우 `useMemo`를 사용하는 것이 좋다. `<ProductContext.Provider value={{id, name}} >`의 경우, 어떤 이유로든 해당 컴포넌트가 리렌더링 된다면 `id`, `name`이 동일하더라도 매번 새로운 참조를 만들어 죄다 리렌더링 될 것이다.
2. 계산 비용이 많이 들고, 사용자의 입력 값이 `map`과 `filter`을 사용했을 때와 같이 이후 렌더링 이후로도 참조적으로 동일할 가능성이 높은 경우, `useMemo`를 사용하는 것이 좋다.
3. `ref` 함수를 부수작용과 함께 전달하거나, `mergeRef-style` 과 같이 `wrapper` 함수 `ref`를 만들 때 `useMemo`를 쓰자. `ref` 함수가 변경이 있을 때마다, 리액트는 과거 값을 `null`로 호출하고 새로운 함수를 호출한다. 이 경우 `ref` 함수의 이벤트 리스너를 붙이거나 제거하는 등의 불필요한 작업이 일어날 수 있다. 예를 들어, `useIntersectionObserver`가 반환하는 `ref`의 경우 `ref` 콜백 내부에서 observer의 연결이 끊기거나 연결되는 등의 동작이 일어날 수 있다.
4. 자식 컴포넌트에서 `useEffect`가 반복적으로 트리거되는 것을 막고 싶을 때 사용하자.
5. 매우 큰 리액트 트리 구조 내에서, 부모가 리렌더링 되었을 때 이에 다른 렌더링 전파를 막고 싶을 때 사용하자. 자식 컴포넌트가 `React.memo` `React.PureComponent`일 경우, 메모이제이션된 `props`를 사용하게되면 딱 필요한 부분만 리렌더링 될 것이다.

> - https://kentcdodds.com/blog/usememo-and-usecallback
> - https://www.developerway.com/posts/how-to-use-memo-use-callback
> - https://yceffort.kr/2022/04/best-practice-useCallback-useMemo
