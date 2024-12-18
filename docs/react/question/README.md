# 질문 리스트

## 🎈 프론트엔드에서 컴포넌트란? (개인적인 생각)
리액트 공식 문서에 컴포넌트의 정리를 보면 "컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있습니다."와 같습니다.   
이 구절에서 볼 수 있듯이 컴포넌트는 재사용 가능한 개별적인 여러 조각이라고 말할 수 있습니다. 우리는 여기서 컴포넌트는 확장성있고 재사용 가능해야하고 독립적이여야 합니다. 그러기 위해서는 컴포넌트는 단일 책임을 가지는 컴포넌트로 구성되어야 합니다. 이러한 컴포넌트들은 테스트하기 좋고 가독성도 좋습니다. 우리가 이러한 재사용 가능한 컴포넌트를 사용하면 DRY 원칙을 지키며 중복 없는 코드를 작성할 수 있습니다.

이때 API를 호출하는 로직이 포함되어있거나 비즈니스 로직이 포함되어 있는 경우에는 좀 더 유연하고 융통성 있는 컴포넌트를 만들어야 합니다. 이러한 컴포넌트를 만들 때 패턴들의 기본적인 베이스는 제어의 역전이 발판으로 되어 있는데, 해당 컴포넌트에게 제어권을 넘겨주고 흐름에 맞게 통제 또는 해당 로직을 구현하고 이 흐름에 대한 호출은 외부 라이브러리가 해주는 방식으로 간단한 API를 만들 수 있으며 이렇게 하면 재사용 가능한 컴포넌트를 만들 수 있습니다.   

제가 흔히 많이 사용하고 있는 custom hook도 예를 들 수가 있는데 이 custom hook을 생성하여 사용하면 비즈니스 로직을 분리할 수 있으며 우리는 이 custom hook으로 필요한 컴포넌트에 맞게 사용할 수 있습니다. 따라서 제어권은 해당 컴포넌트가 가지고 있고 해당 통제권을 넘겨주어 해당 컴포넌트에서 직접 로직을 호출하는 것이 아닌 컴포넌트 밖의 custom hook에서 호출하게 하여 관심사를 분리함으로써 컴포넌트를 재사용할 수 있습니다.   
여기서 주의해야할 점은 결국 모든 원칙은 트레이드오프임으로 관심사에 따른 분리와 재사용성의 확대를 위해 제어 위임을 적절하게 하고 너무 어렵지 않게 사용성도 높이는 그 사이의 최적을 찾아내는건 각자의 개발자의 몫이라고 생각합니다.

잘 설계된 컴포넌트는 (외부로 제어를 위임하여) 재사용 가능하고 확장 가능한 단일 책임 원칙을 따르는 테스트 용이한 컴포넌트라고 생각합니다.

## 🎈 리액트 Hooks의 장점
Hooks를 사용하면 로직의 재사용이 가능하고 관리가 쉽다는 것입니다. 함수 안에서 다른 함수를 호출하는 것으로 새로운 hook을 만들어 볼 수 있습니다. 기존의 class component는 여러 단계의 상속으로 인해 전반적으로 복잡성과 오류 가능성을 증가시켰습니다. 하지만 function component에 hooks를 도입하면서 class component가 가지고 있는 기능을 모두 사용할 수 있음은 물론이고 기존 class component 복잡성, 재사용성의 단점들까지 해결됩니다.

## 🎈 Class Component와 Function Component의 차이점에 대해서 설명하세요.
class component는 여러 단계의 상속으로 이루어져 있습니다. 그리하여 복잡성과 오류 가능성을 증가시켰습니다. 결국 class component는 테스트하기 어렵습니다. 이로 인해 Function Component가 탄생하게 되었고, class component는 라이플 사이클을 가지면 이로인해 각각 생명주기 메소드에 대해 알고 있어야 합니다. 또한, class Component에서 this 사용은 어려움을 느낄 수도 있습니다. 하지만 Function Component는 이러한 기능을 hook을 사용하여 생명주기에 원하는 동작을 하게 합니다.

## 🎈 virtual DOM이 무엇인가요? virtual DOM이 좋은 이유에 대해서 설명하세요.
virtual DOM은 실제 DOM의 변화를 최소화 시켜주는 역할을 합니다. virtual DOM을 사용하는 이유는 효율성 때문입니다. virtual DOM을 활용하면 실제 DOM을 바꾸는 것보다 시간 복잡도가 낮아집니다. 만약 HTML 파일에 20개의 변화가 생기면 과정 역시 20회가 이루어집니다. 하지만 virtual DOM은 변화된 부분만 가려내여 실제 DOM에 전달하기에 실제 DOM은 1회로 인식하여 단 한번만의 렌더링 과정만 거치게 됩니다.    

### 공식 문서
가상 DOM(VDOM)은 UI의 이상적인 또는 "virtual" 표현이 메모리에 유지되고 ReactDOM과 같은 라이브러리에 의해 "real" DOM과 동기화되는 프로그래밍 개념입니다. 이 프로세스를 reconciliation(재조정) 이라고 합니다 .   

이 접근 방식은 React의 선언적 API를 가능하게 합니다.: React에 UI를 원하는 상태를 지정하면 DOM이 해당 상태와 일치하는지 확인합니다. 이러한 방식은 앱 구축에 사용해야 하는 어트리뷰트 조작, 이벤트 처리, 수동 DOM 업데이트를 추상화합니다.   

“virtual DOM”은 특정 기술이라기보다는 패턴에 가깝기 때문에 사람들마다 의미하는 바가 다릅니다. React의 세계에서 “virtual DOM”이라는 용어는 보통 사용자 인터페이스를 나타내는 객체이기 때문에 React elements와 연관됩니다. 그러나 React는 컴포넌트 트리에 대한 추가 정보를 포함하기 위해 “fibers”라는 내부 객체를 사용합니다. 또한 React에서 “virtual DOM” 구현의 일부로 간주할 수 있습니다.

> [공식 문서](https://reactjs.org/docs/faq-internals.html)

## 🎈 웹 성능 향상을 위해 최적화를 해 본 경험이 있나요? 혹은 useMemo와 useCallback 메소드를 활용해 최적화하는 원리에 대해서 설명하세요.
`useMemo`와 `useCallback`은 성능 최적화를 위해서 사용되는 Hook입니다. 이 때, `useMemo`는 특정 결과 값을 재사용하는 반면에 `useCallback`은 특정함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다. 이 둘은 dependency 리스트를 이용하여 그 중 하나가 변경이 되면 결과에 대해 변경됩니다.

> [When to `useMemo` and `useCallback`](https://github.com/saseungmin/frontend-tech-interview/blob/main/react/when-to-useMemo-and-useCallback.md)

## 🎈 React Concurrent Mode
자바스크립트는 싱글스레드 기반 언어이다보니 동시에 처리가 불가능합니다. 그래서 React는 자바스크립트이고 따라서 동일한 제한 사항에 묶여있습니다. 현재로서는, React가 [재조정(Reconciliation)](https://ko.reactjs.org/docs/reconciliation.html) 과정을 한번 시작하면, 이 과정이 완전히 끝나기 전까지는 이를 멈출 수 없습니다. 그러면 브라우저의 메인 UI 스레드는 사용자 입력을 받는 등의 다른 작업을 실행할 수 없게 됩니다.   

그래서 concurrent mode가 탄생하게 되었는데 여러 작업을 동시에 처리하도록 하는 방식인데, 실제로는 동시로 작업이 수행되지는 않습니다. 전환이 빠르기 떄문에 그렇게 보이는 것입니다. 그래서 여러 작업을 작은 단위로 나눈뒤 그 작업들 간의 우선순위를 정해서 그 작업을 수행하는 방식입니다.   

Concurrent mode를 사용하면 사용자 경험에서 아주 중요한 역할을 합니다. 사용자가 필요로하는 중요한 부분을 우선순위를 높게하고 불필요한 부분에는 delay를 걸어주어 사용자경험을 향상시킬 수 있습니다.

- https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react
- https://velog.io/@cadenzah/react-concurrent-mode

## 🎈 Hydrate란?
Hydrate는 SSR에서 사용되는 개념입니다. SSR의 경우 pre-rendering를 통해 완성된 HTML을 클라이언트에게 전달합니다. 이렇게 서버에서 렌더링된 정적 페이지를 클라이언트에게 보내고, react는 번들링된 JavaScript 코드를 클라이언트에게 보냅니다. 클라이언트는 전달받은 HTML과 JS코드를 매칭하는 Hydrate를 수행합니다. Hydrate란 전송받은 JavaScript들이 이전에 보내진 HTML DOM 요소 위에서 한번 더 렌더링 하게 되면서 각각 자기 자리를 찾아가며 매칭되는 것입니다. Hydrate 후에는 클릭과 같은 이벤트나 모듈들이 적용되어 사용자 조작이 가능해집니다.   

즉, Hydrate는 클라이언트 측 JavaScript가 정적 호스팅 또는 서버 측 렌더링을 통해 전달되는 정적 HTML 요소에 이벤트 핸들러를 첨부하여 동적 웹 페이지로 변환하는 기술입니다.   

React 18 이전에는 한 번 hydration이 시작되면 전체 트리가 완전히 hydration이 되기 전까지는 유저는 hydration이 불필요한 다른 영역과 상호작용을 할 수 없었습니다. 하지만 react 18 버전에서 suspense를 사용한 concurrent mode를 사용할 수 있게 되면서 필요한 부분만 hydration이 가능하며, 기존에 hydration을 하기 위해서는 모두 불러와야하는 문제도 lazy를 사용한 코드 스플리팅으로 해결할 수 있게 되었습니다.

## 🎈 React Query

### `staleTime` vs `gcTime`
`staleTime`은 데이터가 fresh 상태에서 stale 상태로 변경되는데 걸리는 시간입니다. 기본값은 0분으로 즉시 변경됩니다. fresh 상태일 때는 쿼리 인스턴스가 새롭게 mount 되어도 네트워크 fetch가 일어나지 않습니다. 또한, `staleTime`이 지나지 않았다면 unmount 후 mount 되어도 fetch가 일어나지 않습니다.   

`gcTime`은 데이터가 inactive(비활성) 상태일 때 캐싱된 상태로 남아있는 시간으로 기본값은 5분입니다. 쿼리 인스턴스가 unmount 되면 데이터는 inactive 상태로 변경되며, 캐시는 `gcTime`만큼 유지됩니다. `gcTime`이 지났을 경우에는 가비지 컬렉터 수집 대상이 됩니다. 만약 `gcTime`이 지나기 전에 쿼리 인스턴스가 다시 mount 되면, 데이터를 fetch하는 동안 캐시 데이터를 보여줍니다.

> https://tanstack.com/query/latest/docs/react/guides/caching

### `isPending` vs `isFetching`
`isFetching`은 데이터가 fetch될 때 `true`일 뿐만 아니라, 캐싱 데이터가 있어서 백그라운드에서 refetching 되더라도 `true`입니다.   
`isPending`은 캐싱된 데이터가 없을 때 fetching 하는 경우에만 `true`입니다.

## 🎈 [React Strict Mode에서 렌더링이 두 번 되는 이유](https://ko.react.dev/reference/react/StrictMode)
Strict Mode는 개발 환경에서만 실행되지만, 프로덕션에서 제대로 재현하기 어려울 수 있는 버그를 찾는 데 도움이 됩니다. Strict Mode를 사용하면 사용자가 보고하기 전에 버그를 수정할 수 있습니다.   

Strict Mode에서는 개발 시 다음과 같은 검사를 가능하게 합니다.

- 컴포넌트가 순수하지 않은 렌더링으로 인한 버그를 찾기 위해 추가로 다시 렌더링합니다.
- 컴포넌트가 Effect 클린업이 누락되어 발생한 버그를 찾기 위해 Effect를 다시 실행합니다.
- 컴포넌트가 더 이상 사용되지 않는 API를 사용하는지 확인합니다.

React는 작성하는 모든 컴포넌트가 순수 함수라고 가정합니다. 이것은 React 컴포넌트는 항상 동일한 입력(props, state, context)에 대해 동일한 JSX를 반환해야 한다는 것을 의미합니다.   

이 규칙을 위반하는 컴포넌트는 예기치 않게 동작하며 버그를 일으킵니다. Strict Mode는 실수로 작성된 순수하지 않은 코드를 찾아내기 위해 몇 가지 함수(순수 함수여야 하는 것만)를 **개발 환경에서 두 번 호출**합니다.   

- 컴포넌트 함수 본문 (이벤트 핸들러 내부 코드를 포함하지 않도록 최상위 로직에서만)
- `useState`, `set` 함수, `useMemo`, 또는 `useReducer`에 전달한 함수
- `constructor`, `render`, `shouldComponentUpdate`와 같은 일부 클래스 컴포넌트 메소드 (전체 목록 보기)

**함수가 순수한 경우 두 번 실행하여도 동작이 변경되지 않습니다.** 순수 함수는 항상 같은 결과를 생성하기 때문입니다. 그러나 함수가 순수하지 않다면 (예: 받은 데이터를 변경하는 함수) 두 번 실행하면 보통 알아챌 수 있습니다. (이것이 순수하지 않은 이유입니다!) 이는 버그를 조기에 발견하고 수정하는 데 도움이 됩니다.

## 🎈 Reference
- https://velog.io/@ye-ji/React-%EC%98%88%EC%83%81-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%A6%AC%EC%8A%A4%ED%8A%B8
