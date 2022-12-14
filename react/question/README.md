## 질문 리스트

> https://velog.io/@ye-ji/React-%EC%98%88%EC%83%81-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%A6%AC%EC%8A%A4%ED%8A%B8

### 🎈 리액트 Hooks의 장점
Hooks를 사용하면 로직의 재사용이 가능하고 관리가 쉽다는 것입니다. 함수 안에서 다른 함수를 호출하는 것으로 새로운 hook을 만들어 볼 수 있습니다. 기존의 class component는 여러 단계의 상속으로 인해 전반적으로 복잡성과 오류 가능성을 증가시켰습니다. 하지만 function component에 hooks를 도입하면서 class component가 가지고 있는 기능을 모두 사용할 수 있음은 물론이고 기존 class component 복잡성, 재사용성의 단점들까지 해결됩니다.

### 🎈 Class Component와 Function Component의 차이점에 대해서 설명하세요.
class component는 여러 단계의 상속으로 이루어져 있습니다. 그리하여 복잡성과 오류 가능성을 증가시켰습니다. 이로 인해 Function Component가 탄생하게 되었고, class component는 라이플 사이클을 가지면 이로인해 각각 생명주기 메소드에 대해 알고 있어야 합니다. 또한, class Component에서 this사용은 어려움을 느낄 수도 있습니다. 하지만 Function Component는 이러한 기능을 hook을 사용하여 생명주기에 원하는 동작을 하게 합니다.

### 🎈 virtual DOM이 무엇인가요? virtual DOM이 좋은 이유에 대해서 설명하세요.
virtual DOM은 실제 DOM의 변화를 최소화 시켜주는 역할을 합니다. virtual DOM을 사용하는 이유는 효율성 때문입니다. virtual DOM을 활용하면 실제 DOM을 바꾸는 것보다 시간 복잡도가 낮아집니다. 만약 HTML 파일에 20개의 변화가 생기면 과정 역시 20회가 이루어집니다. 하지만 virtual DOM은 변화된 부분만 가려내여 실제 DOM에 전달하기에 실제 DOM은 1회로 인식하여 단 한번만의 렌더링 과정만 거치게 됩니다.

### 🎈 웹 성능 향상을 위해 최적화를 해 본 경험이 있나요? 혹은 useMemo와 useCallback 메소드를 활용해 최적화하는 원리에 대해서 설명하세요.
`useMemo`와 `useCallback`은 성능 최적화를 위해서 사용되는 Hook입니다. 이 때, `useMemo`는 특정 결과 값을 재사용하는 반면에 `useCallback`은 특정함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다. 이 둘은 dependency 리스트를 이용하여 그 중 하나가 변경이 되면 결과에 대해 변경됩니다.

> [When to `useMemo` and `useCallback`](https://github.com/saseungmin/frontend-tech-interview/blob/main/react/when-to-useMemo-and-useCallback.md)

### 🎈 React Concurrent Mode
자바스크립트는 싱글스레드 기반 언어이다보니 동시에 처리가 불가능합니다. 그래서 React는 자바스크립트이고 따라서 동일한 제한 사항에 묶여있습니다. 현재로서는, React가 [재조정(Reconciliation)](https://ko.reactjs.org/docs/reconciliation.html) 과정을 한번 시작하면, 이 과정이 완전히 끝나기 전까지는 이를 멈출 수 없습니다. 그러면 브라우저의 메인 UI 스레드는 사용자 입력을 받는 등의 다른 작업을 실행할 수 없게 됩니다.   

그래서 concurrent mode가 탄생하게 되었는데 여러 작업을 동시에 처리하도록 하는 방식인데, 실제로는 동시로 작업이 수행되지는 않습니다. 전환이 빠르기 떄문에 그렇게 보이는 것입니다. 그래서 여러 작업을 작은 단위로 나눈뒤 그 작업들 간의 우선순위를 정해서 그 작업을 수행하는 방식입니다.   

Concurrent mode를 사용하면 사용자 경험에서 아주 중요한 역할을 합니다. 사용자가 필요로하는 중요한 부분을 우선순위를 높게하고 불필요한 부분에는 delay를 걸어주어 사용자경험을 향상시킬 수 있습니다.

- https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react
- https://velog.io/@cadenzah/react-concurrent-mode
