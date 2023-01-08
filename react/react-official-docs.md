## React 공식문서 필요한 부분 정리

### [JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)
React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결된다는 사실을 받아들입니다.   

React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리합니다.

### [엘리먼트 렌더링](https://ko.reactjs.org/docs/rendering-elements.html)

> 엘리먼트는 React 앱의 가장 작은 단위입니다.

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다. React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.   

React 엘리먼트는 **불변객체**입니다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없습니다. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다. UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 `root.render()`로 전달하는 것입니다.   

React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트합니다.

### [Components와 Props](https://ko.reactjs.org/docs/components-and-props.html)
개념적으로 컴포넌트는 JavaScript 함수와 유사합니다. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.   

**props의 이름은 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는 것을 권장합니다.**   

재사용 가능한 컴포넌트를 만들어 놓는 것은 더 큰 앱에서 작업할 때 두각을 나타냅니다. UI 일부가 여러 번 사용되거나 (Button, Panel, Avatar), UI 일부가 자체적으로 복잡한 (App, FeedStory, Comment) 경우에는 별도의 컴포넌트로 만드는 게 좋습니다.   

#### [props는 읽기 전용입니다.](https://ko.reactjs.org/docs/components-and-props.html#props-are-read-only)
**모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.**

### [State and Lifecycle](https://ko.reactjs.org/docs/state-and-lifecycle.html)

#### [State를 올바르게 사용하기](https://ko.reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
- 직접 State를 수정하지 마세요. (대신, `setState` 사용)
- State 업데이트는 비동기적일 수도 있습니다.
- State 업데이트는 병합됩니다
  - `setState()`를 호출할 때 React는 제공한 객체를 현재 state로 병합합니다.

#### [데이터는 아래로 흐릅니다](https://ko.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)
부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태(stateful)인지 또는 무상태(stateless)인지 알 수 없고, 그들이 함수나 클래스로 정의되었는지에 대해서 관심을 가질 필요가 없습니다.   

이 때문에 state는 종종 로컬 또는 캡슐화라고 불립니다. state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근할 수 없습니다.   

**일반적으로 이를 “하향식(top-down)” 또는 “단방향식” 데이터 흐름이라고 합니다. 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 “아래”에 있는 컴포넌트에만 영향을 미칩니다.**   
