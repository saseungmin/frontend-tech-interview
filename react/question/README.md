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

### 🎈 React 18 변경점

#### `useId`
`useId`는 클라이언트와 서버간의 hydration의 mismatch를 피하면서 유니크한 아이디를 생성할 수 있는 새로운 hook입니다. 이는 주로 고유한 `id`가 필요한 접근성 API와 사용되는 컴포넌트에 유용할 것으로 기대됩니다.   

아이디는 기본적으로 트리 내부의 노드의 위치를 나타내는 base 32 문자열입니다.. 트리가 여러 children으로 분기될 때마다, 현재 레벨에서 자식 수준을 나타내는 비트를 시퀸스 왼쪽에 추가하게 됩니다,.   

`useId`는 목록에서 키를 생성하기 위한 것이 아닙니다. 키는 데이터에서 생성되어야 합니다.   

> https://reactjs.org/blog/2022/03/29/react-v18.html   
> https://yceffort.kr/2022/04/react-18-changelog
