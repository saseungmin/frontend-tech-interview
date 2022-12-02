## [jest-plugin-context](https://github.com/negativetwelve/jest-plugins/tree/master/packages/jest-plugin-context)

`describe`는 설명하기 위한 목적이라면 `context`는 뜻처럼 문맥에 해당하는 것 `context`는 `jest`에서 공식적으로 제공하는 건 아니고, 루비에서 사용하는 BDD 형식의 TDD [RSpec](http://rspec.info/) 기반으로 만들어진 용도입니다.   

RSpec에서는 `describe`는 한 기능에 대해 테스트 세트을 래핑하는 데 사용되고, `context` 동일한 상태에서 하나의 기능에 대해 테스트 세트를 래핑하는 데 사용됩니다.   

> In RSpec, describe it used to wrap a set of tests against one functionality while context is to wrap a set of tests against one functionality under the same state.

예를 들어, 모바일인 경우 버튼을 보여주고, 그렇지 않은 경우 보여주지 않는 인 두가지의 문맥이 존재한 경우 아래와 같이 `context`를 사용해 둘을 나누어줄 수 있습니다.

```jsx
describe('Some Component', () => {
  const renderComponent = () => render((
    <Test />
  ));

  context('모바일인 경우', () => {
    it('버튼이 보여야 한다', () => {
      const { container } = renderComponent();

      // ...
    });
  });

  context('모바일이 아닌 경우', () => {
    it('버튼은 보이지 않아야만 한다', () => {
      const { container } = renderComponent();

      // ...
    });
  });
});
```

이걸 풀어서 읽어보면 두 개의 문맥으로 읽을 수 있어요.   
- 컴포넌트에서 모바일인 경우 버튼이 보여야 한다.   
- 컴포넌트에서 모바일이 아닌 버튼이 보이지 않아야만 한다.   

영어로는 보통 `context`에서 with, without, has, is 이런식으로 사용하기에 저는 `~한 경우`, `~일 때` 이런식으로 작성하는 편입니다. ([example](https://github.com/negativetwelve/jest-plugins/tree/master/packages/jest-plugin-context#example))

만약 `context`도 `describe`으로 작성했으면 알아보기에 햇갈림이 있었을텐데 `context`으로 문맥을 나누어주니까 훨씬 더 테스트의 가독성을 높여줄 수 있습니다. 

## [given2](https://www.npmjs.com/package/given2)

이 경우에도 결국 테스트 가독성을 향상시키기 위해서 사용합니다. 좀 더 선언적이게 작성할 수 있습니다.   
위 예시를 사용해서 만약에 모바일 유무를 판단하기 위해서 어떤 값을 넘겨줘야한다면 보통


```tsx
const renderComponent = (isMobile: boolean) => render((
  <Test isMobile={isMobile} />
));

const { container } = renderComponent(true);
```

이런식으로 사용될꺼에요.    
이때 함수 인자로 넘겨주는게 이 테스트를 읽기 쉽나요? `renderComponent` 라는 함수를 따라가서 `isMobile`을 넘겨주고 이걸로 판단하는구나라는 것으로 코드를 읽을 수가 있어요.   

그러면 given2를 사용해볼께요.   

```tsx
describe('Some Component', () => {
  const renderComponent = () => render((
    <Test isMobile={given.isMobile} />
  ));

  context('모바일인 경우', () => {
    given('isMobile', () => true);

    it('버튼이 보여야 한다', () => {
      const { container } = renderComponent();

      // ...
    });
  });

  context('모바일이 아닌 경우', () => {
    given('isMobile', () => false);

    it('버튼은 보이지 않아야만 한다', () => {
      const { container } = renderComponent();

      // ...
    });
  });
});
```

어떤가요?   
위에서 아래로 모바일인 경우 `isMobil`e이 `true`인 경우 버튼이 보이겠구나라고 명확하게 읽히지 않나요?   
given2의 장점은 해당 값이 사용될 때까지 지연 평가를 하게되어서 이런 형태로 작성이 쉽게 가능합니다.   

> Note that given variables is lazy-evaluated: data in the variables are not calculated until they are accessed for the first time.
