# 👉 브라우저는 웹페이지를 어떻게 그리나요? - Critical Rendering Path

> https://m.post.naver.com/viewer/postView.nhn?volumeNo=8431285&memberNo=34176766

브라우저가 하나의 화면을 그려내는 이 과정을 **중요 렌더링 경로(Critical Rendering Path)** 라고 부른다.   

우리가 주소창에 url을 입력하고, 엔터키를 치면 브라우저는 해당 서버에 요청을 보내고 서버에서는 응답으로 HTML 데이터를 내려주는데, 이 HTML 데이터를 실제 우리가 보이는 하면으로 그리기까지 브라우저는 다음 단계를 거쳐 작업을 진행한다. 이 과정의 각 단계가 최대한 효율적으로 이루어지도록 만드는 것을 보통 최적화라고 부른다.
1. 서버에서 응답으로 받은 HTML 데이터를 파싱한다.
2. HTML을 파싱한 결과로 DOM Tree를 만든다.
3. 파싱하는 중 CSS 파일 링크를 만나면 CSS 파일을 요청해서 받아온다.
4. CSS 파일을 읽어서 CSSOM(CSS Object Model)을 만든다.
5. DOM Tree와 CSSOM이 모두 만들어지면 이 둘을 사용해 Render Tree를 만든다.
6. Render Tree에 있는 각각의 노드들이 화면의 어디에 어떻게 위치할 지를 계산하는 Layout(Reflow) 과정을 거친다.
7. 화면에 실제 픽셀을 Paint한다.

### 1. 서버에서 응답으로 받은 HTML 데이터를 파싱한다.

```html
<html>
<head>
  <meta charset="utf-8">
  <link href="./style.css" rel="stylesheet">
</head>
<body>
  <p>Hello, <span>web performance</span> students</p>
  <div>
    <img src="./image.png">
  </div>
</body>
</html>
```

브라우저 주소창에 url을 입력하고 엔터키를 치면 브라우저는 해당 서버에 요청을 보내게 된다. 요청에 대한 응답으로는 위와 같은 형태의 HTML 문서를 받아오게 되고, 이걸 하나하나 **파싱(Parsing)** 하기 시작하면서 브라우저가 데이터를 화면에 그리는 과정이 시작된다.
- 미디어 파일을 만나면 추가로 요청을 보내서 받아온다.
- JavaScript 파일을 만나면 해당 파일을 받아와서 실행할 때까지 파싱을 멈춘다.

### 2. HTML을 파싱한 결과로 DOM Tree를 만든다.

<p align="center">
  <img src="images/12.png"/>
</p>

브라우저는 읽어들인 HTML 바이트 데이터를 해당 파일에 지정된 인코딩에 따라 문자열로 바꾸게 된다.   

바꾼 문자열을 다시 읽어서 HTML 표준에 따라 문자열을 토큰(Token)으로 변환한다. 이미지에서와 같이 이 과정에서 `<html>` 은 `StartTag:html`, `</html>`은 `EndTag:html`로 변환된다.   

이렇게 만들어진 토큰들을 다시 노드로 바꾸는 과정을 거친다. `StartTag:html`이 들어왔으면 html노드를 만들고 `EndTag:html`을 만나기 전까지 들어오는 토큰들은 html노드 자식 노드로 넣는 식으로 변환이 이루어지기 때문에 이러한 과정이 끝나면 Tree 모양의 **DOM(Document Object Model)** 이 완성되게 된다.

### 4. CSS 파일을 읽어서 CSSOM을 만든다.
HTML을 파싱하다 CSS링크를 만나면 CSS 파일을 요청해서 받아오게 된다.   
받아온 CSS 파일은 HTML을 파싱한 것과 유사한 과정을 거쳐서 Tree형태의 **CSSOM**으로 만들어진다.   
CSS 파싱은 CSS 특성상 **자식 노드들이 부모 노드의 특성을 계속해서 이어받은 규칙이 추가**된다는 것을 빼고는 HTML 파싱과 동일하게 이루어진다.   

이렇게 CSSOM을 구성하는 것이 끝나야 비로서 이후의 Rendering 과정을 시작할 수 있다.

### 5. DOM Tree와 CSSOM이 모두 만들어지면 이 둘을 사용해 Render Tree를 만든다.
CSSOM을 모두 만들었으면, DOM과 CSSOM을 합쳐서 Render Tree를 만든다. Render Tree는 DOM Tree에 있는 것들 중에서 화면에 실제로 **보이는** 친구들만으로 이루어진다. 예를 들어 CSS에서 `display:none`으로 설정했다면 , 그 노드와 그 자식 노드 전부는 Render Tree에 추가되지 않는다. 마찬가지로 `<head>` 태그 안의 내용들도 Render Tree에는 추가되지 않는다.   

그래서 아래 이미지의 Render Tree에는 `<head>` 태그와, `display:none`인 `<p>` 태그 하위의 `<span>`태그가 사라진것을 볼 수 있다.

<p align="center">
  <img src="images/13.png"/>
</p>

- [Udacity 강의 참고](https://www.youtube.com/watch?v=lvb06W_VKVE&ab_channel=Udacity)

#### Render Object에서 Render Layer로
Render Object Tree, Render Layer Tree 등등을 합쳐서 화면을 그리는 데에 필요한 모든 정보를 가지고 있는 Render Tree가 완성된다.   

**Render Object Tree**가 위에서 말했듯이 DOM Tree의 노드 중에서 화면에 보이는 것들만으로 이루어지는 트리이다. `block`, `inline`, `image`, `text`, `table`같은 요소들이 Render Object가 된다.   

Render Object의 속성에 따라 필요한 경우 **Render Layer**가 만들어진다. 그리고 이 Render Layer중에서 GPU에서 처리되는 부분이 있으면 다시 **Graphic Layer**로 분리됩니다. 대표적으로는 다음과 같은 속성들이 쓰였을 때 Graphic Layer가 만들어지게 된다.   
- CSS 3D Transform(translate3d, preserve-3d 등)이나 perspective 속성이 적용된 경우
- `<video>` 또는 `<canvas>` 요소
- CSS3 애니메이션함수나 CSS 필터 함수를 사용하는 경우
- 자식 요소가 레이어로 구성된 경우
- `z-index` 값이 낮은 형제 요소가 레이어로 구성된 경우

### 6. Render Tree에 있는 각각의 노드들이 화면의 어디에 어떻게 위치할 지를 계산하는 Layout(Reflow) 과정을 거친다.
화면에 보이는 노드들만을 가지고 있는 Render Tree가 다 만들어지면, 이제 Render Tree에 있는 **각각의 노드들이 화면의 어디에 위치할 지를 계산하는 Layout 과정을 거친다.**   

CSSOM에서 가져온 스타일 정보들로 이미 얘가 어떻게 생겨야 한다는 것은 모두 알고 있지만, 현재 보이는 뷰포트를 기준으로 실제로 놓으려면 얘가 어디에 가야하는 지는 계산을 또 해야하는 것이다. 여기에서 CSS box model이 쓰이며, `position`(`relative`, `absolute`, `fixed`..), `width`, `height` 등 틀과 위치에 관련된 부분들이 계산된다.   

만약 브라우저를 리사이즈한다면, 보이는 요소는 변함이 없으니 Render Tree는 그대로인 상태에서, Layout 단계만 다시 거쳐 위치를 계산해서 그리게 된다.   

이렇게 화면에 보이는 요소 각각이 어디에 어떻게 위치할 지를 정해주는 과정을 Webkit에서는 layout으로, Gecko에서는 reflow로 부른다.   

### 화면에 실제 픽셀을 Paint(Repaint)한다.
이제 Render Tree의 각 노드들을 실제로 화면에 그리게 된다. `visibility`, `outline`, `background-color` 같이 눈에 보이는 픽셀들이 여기에서 그려진다.   

만약 Render Layer가 2개 이상이라면 각각의 Layer를 paint한 뒤 하나의 이미지로 Composite하는 과정을 추가로 거친 뒤에 실제로 화면에 그려지게 된다.
