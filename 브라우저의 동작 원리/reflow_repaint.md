# 👉 [Reflow or Repaint(or ReDraw)과정 설명 및 최적화 방법](https://webclub.tistory.com/346)

## 💻 Reflow 발생
- 생성된 DOM 노드의 레이아웃 수치(너비, 높이, 위치 등) 변경 시 영향을 받은 모든 노드의(자신, 자식, 부모, 조상(결국 모든 노드)) 수치를 다시 계산하여(Recalculate) 렌더 트리를 재생성하는 과정.
- Reflow 과정이 끝난 후 재 생성된 렌더 트리를 다시 그리게 되는데 이 과정을 Repaint라고 한다.

Reflow 발생 코드

```js
function reFlow() {
  document.getElementById('container').style.width = '600px';
  return false;
}
```

1. Click 이벤트
2. Recalculate (변경된 스타일 수치 계산 수행)
3. Layout (Reflow 과정 수행)
4. Paint (Repaint 과정 수행)

## 💻 Repaint 발생
- Reflow 발생 이유와 같이 스타일의 모든 변경이 레이아웃 수치에 영향을 받는것은 아니다.
- 노드의 `background-color`, `visibility`, `outline` 등의 스타일 변경 시에는 레이아웃 수치가 변경되지 않으므로 Reflow 과정이 생략된 Repaint 과정만 일어나게 된다.

```js
function rePaint() {
  document.getElementById('container').style.backgroundColor = 'red';
  return false;
}
```

1. Click 이벤트
2. Recalculate (변경된 스타일 수치 계산 수행)
3. Paint (Repaint 과정 수행)

## 💻 Reflow 과정이 일어나는 상황
- 노드의 추가 또는 제거시
- 요소의 위치 변경 시
- 요소의 크기 변경 시
- 폰트 변경과 이미지 크기 변경 시
- 페이지 초기 랜더링 시
- 윈도우 리사이징 시

## 💻 Reflow 최적화 방법
1. 클래스 변화에 따른 스타일 변경 시, 최대한 DOM 구조 상 끝단에 위치한 노드에 주어야 한다.
2. 인라인 스타일을 최대한 배제한다. (적용 시 코드 가독성과 Reflow 비용을 줄일 수 있다.)
3. 애니메이션이 들어간 노드는 가급적 `position:fixed` 또는 `position:absolute`를 지정하여 전체 노드에서 분리 시키도록 한다.
  - 보통 JS + CSS를 활용한 애니메이션 효과는 해당 프레임에 따라 무수히 많은 Reflow 비용이 발생하게 된다.
  - 하지만, `position` 속성을 `fixed` 또는 `absolute`로 값을 주면 지정된 노드는 전체 노드에서 분리된다.
4. 퀄리티와 퍼포먼스 사이에서 타협하라 (애니메이션 효과는 보통 무수히 많은 Reflow 비용이 들어가게 된다.)
5. 테이블 레이어웃을 피하라.
  - 테이블로 구성된 페이지 레이아웃은 점진적(progressive) 페이지 렌더링이 적용되지 않으며, 모두 로드되고 계산된 후에야 회면에 뿌려지게 된다.
6. IE의 경우, CSS에서 JS표현식을 피하라.
7. CSS 하위 선택자는 필요한 만큼만 정리하라.
8. `position:relative` 사용 시 주의하자.
9. `cssText` 및 클래스를 활용해 Reflow 또는 Repaint를 최소화하라.
  - DOM과 스타일 변경을 하나로 묶어 리플로우 수행을 최소화 한다.

```js
// 해당 노드의 style 객체를 여러변 호출해 적용된 코드: 112ms
function collect() {
  var elem = document.getElementById('container');

  elem.style.backgroundColor = 'red';
  elem.style.width = '200px';
  elem.style.height = '200px';

  return false;
}

// style 객체 속성인 cssText를 통해 한번에 적용된 코드: 104ms
function collect() {
  var elem = document.getElementById('container');

  elem.style.cssText = 'background:red;width:200px;height:200px;';

  return false;
}

// css에 정의된 class를 통해 한번에 적용된 코드: 104ms
function collect() {
  var elem = document.getElementById('container');

  elem.className = 'collect';

  return false;
}
```

10. 캐쉬를 활용한 Reflow를 최소화하라.
  - 브라우저는 레이아웃 변경을 큐에 저장했다가 한번에 실행하는 방법으로 Reflow 수를 줄인다.
  - 하지만 `offset`, `scrollTop`, `scrollLeft` 등 값과 같은 계산된 스타일 정보를 요청할 때마다 정확한 정보를 제공하기 위해 큐를 비우고 모든 변경을 다시 적용한다.
  - 즉, 중복되는 수치에 대한 스타일 정보를 변수에 저장(캐쉬)해 요청수를 줄임으로써 Reflow 비용을 최소화시킨다.

```js
function collect() {
  var elem = document.getElementById('container');
  var cw = elem.style.width;

  return parseInt(cw, 10) * parseInt(cw + document.documentElement.clientWidth, 10);
}
```

11. DOM 사용을 최소화하여 Reflow 비용 줄이기.
- [DOM 사용 최소화 하기](https://mohwaproject.tistory.com/entry/DOM-%EC%82%AC%EC%9A%A9-%EC%B5%9C%EC%86%8C%ED%99%94-%ED%95%98%EA%B8%B0)
- [Reflow 원인과 마크업 최적화](http://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0031/Reflow_____________________________Tip.pdf)
