# 👉 Web

### 🎈 [CORS는 왜 이렇게 우리를 힘들게 하는걸까?](/docs/web/cors/cors는_왜_이렇게_우리를_힘들게_하는걸까)

### 🎈 [브라우저의 동작 원리](https://github.com/saseungmin/frontend-tech-interview/tree/main/web/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98%20%EB%8F%99%EC%9E%91%20%EC%9B%90%EB%A6%AC)

### 🎈 CSR vs SSR
모바일 시대가 도래했고 모바일 환경에 맞춰진 웹 페이지에 대한 니즈가 폭발적으로 증가했고 그에 따른 성능 이슈도 함께 거론되었습니다. 데스크탑에 비해 성능이 낮은 모바일, 스마트폰을 통해 웹페이지를 출력하기 위해서 기존에 있었던 방식과 다른 접근이 필요했습니다. 그렇게 나온게 SPA 기법이 등장하게되었습니다. SPA는 브라우저에 로드되고 난 뒤에 페이지 전체를 서버에 요청하는 것이 아니라 최초 한번 페이지 전체를 로딩한 이후 부터는 데이터만 변경하여 사용할 수 있는 웹 어플리케이션입니다. 이전에 요청 시 마다 새로고침이 일어나며 페이지를 로딩할 때마다 서버로부터 리소스를 전달받아 해석하고 화면에 렌더링하는 방식은 MPA 방식입니다. SPA는 트래픽을 감소시키고 사용자에게 더 나은 경험을 재공ㅇ했습니다. 서버는 단지 JSON 파일만 보내주는 역할을 헀고, Html을 그리는 역할은 클라이언트 측에서 자바스크립트가 수행하게 된 것입니다. 이것이 바로 클라이언트 사이드 렌더링입니다. 그런데 클라이언트 쪽이 점점 무거워지자 이에 반대로 view만 관리하자는 철학으로 React가 등장하게 되었고 이렇게 클라이언트 사이드 렌더링과 서버 사이드 렌더링의 싸움이 시작된 것입니다.   

클라이언트 사이드 렌더링의 경우, 사용자의 행동에 따라 필요한 부분만 다시 읽어들이기 때문에 서버 측에서 렌더링하여 전체 페이지를 다시 읽어들이는 것보다 빠른 인터렉션을 기대할 수 있습니다. 하지만, 클라이언트 사이드 렌더링은 페이지를 읽어오는 시간, 자바스크립트를 읽어들이는 시간, 자바스크립트를 화면에 그리는 시간까지 모두 마쳐야 콘텐츠가 사용자에게 보여지게 됩니다. 즉, 초기 구동 속도가 느리다는 단점이 존재합니다. 그리고 가장 치명적인 단점은 검색 엔진 최적화의 문제가 존재한다는 점입니다. 대부분의 웹 크롤러, 봇들이 자바스크립트 파일을 실행시키지 못하기 때문입니다.   

반대로 서버사이드 렌더링인 경우 JS를 이용한 렌더링이 아니기 떄문에 검색 엔진에 최적화가 가능하고, 초기 로딩은 빠르지만, 매번 페이지 요쳥떄마다 새로고침이 되기 때문에 사용자 경험이 SPA보다 좋지 못하고, 매번 요청을 하기 때문에 서버의 부하가 커집니다.   

### 🎈 브라우저 렌더링 과정 (Critical Rendering Path)
우리가 주소창에 url를 입력하고, 브라우저는 해당 서버로 요청을 보내고 서버에는 응답으로 HTML 데이터를 내려주는데, 이 HTML 데이터를 실제 우리가 보이는 화면으로 그리기까지 단계를 critical rendering path라고 부릅니다.   
1. 서버에서 응답을 받은 HTML 데이터를 파싱을 합니다. 이때 javascript 파일을 만나면 해당 파일을 받아오고 실행할 떄까지 파싱을 멈춥니다.
2. 이 HTML 파싱한 결과로 DOM Tree를 만듭니다.
3. 파싱하는 중 CSS 파일 링크를 만나면 CSS 파일을 요청해서 받아옵니다.
4. CSS 파일을 읽어서 CSSOM을 만듭니다.
5. DOM Tree와 CSSOM이 모두 만들어지면 이 둘을 사용해 Render Tree를 만드는데 이 Render Tree는 실제로 눈에 보이는 친구들로만 이루어집니다.
6. Render Tree에 있는 각각의 노드들이 화면의 어디에 어떻게 위치할 것인가를 계산하는 Layout 과정을 거치는데 만약 브라우저 창이 변경되면 Render Tree를 만드는 과정은 생략되고, Layout이 일어나게 됩니다.
7. 이제 Render Tree 각 노드들을 실제로 화면에 그리게 되는 Paint 과정을 거치게 됩니다.

### 🎈 Reflow or Repaint(or ReDraw)과정 설명 및 최적화 방법
reflow는 생성된 DOM 노드의 레이아웃 수치 변경시 영향을 받은 모든 노드 수치를 다시 계산하여 렌더트리를 재생성하는 과정입니다. reflow과정이 끝난 뒤 렌더 트리를 다시 그리는 과정을 repaint라고 합니다.   
다음과 같은 코드가 이제 reflow가 발생합니다.

```js
function reflow () {
  document.getElementById('container').style.width = '600px';
  return false;
}
```
변경딘 스타일 수치 계산이 수행되고, reflow 과정이 수행되고 생성된 렌더 트리를 그리는 repaint과정이 수행됩니다.

repaint 발생은 이유야 background-color같은 경우는 레이아웃 수치는 변경되지 않았으므로 reflow과정이 생략된 repaint 과정만 일어나게 됩니다.

### 🎈 CORS
웹에서 다른 출처로의 리소스 요청을 제한하는 것과 관련된 두 가지 정책이 존재하는데 하나가 CORS고 하나가 SOP입니다. CORS는 서로다른 출처끼리의 리소스를 공유하는 정책이고 SOP는 서로다른 출처끼리의 리소스를 공유하지 못하게 하는 정책입니다. 이러한 정책이 존재하는 이유는 보안적인 문제 때문인데 아무런 제약이 없으면 악의를 가진 사용자가 소스코드를 본 후 CSRF와 XSS와 같은 방법을 사용하여 정보를 탈취할 수 있다.   

클라이언트가 다른 출처의 리소스를 요쳥할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 Origin이라는 필드에 요청을 보내는 출처를 함께 담아보냅니다. 이후 서버가 이 요청에 대한 응답을 할 때 응답 헤더에 Access-Control-Allow-Origin 이라는 값에 이 리소스를 접근하는 것이 허용된 출처를 내려주고, 이후 응답을 받은 브라우저는 요청의 Origin과 서버가 보내준 응답의 Access-Control-Allow-Origin을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정하게 됩니다.

### 🎈 local storage vs session storage vs cookie
모든 클라이언트 상에서 key/value 형태로 저장할 수 있는 메커니즘으로 value는 반드시 문자열이어야 합니다. 또한 모두 동일 출처 정책을 따르기 떄문에 다른 도메인에서 접근할 수 없습니다.   

쿠키는 클라이언트 또는 서버에 의해서 생성되며 지속시간을 설정에 따라 다릅니다. 용량은 5kb정도이며 서버와의 통신이 가능하지만 취약점으로 XSS/CSRF 공격이 존재합니다. 하지만, 저의 경험상 httponly 속성을 true로 변경하고, security 속성을 true로 변경해서   
local storage는 클라이언트에서 생성되며 명시적으로 삭제할떄까지 유지가 됩니다. 용량은 5mb에서 10mb정도이며 서버와의 통신은 불가능하고 취약점으로는 XSS 공격이 존재합니다.   
session storage도 마찬가지로 클라이언트에서만 생성할 수 있고 같은 취약점이 존재하지만 다른점으로는 브라우저가 종료되면 삭제가 됩니다.

### 🎈 XSS와 CSRF
XSS(Cross Site Scription)는 권한이 없는 사용자가 웹 사이트에 스크립트를 삽입하는 공격 방법으로 악의적으로 스크립트를 삽입하여 이를 열람한 사용자의 쿠키가 해커에게 전송시키며, 이 탈취한 쿠키를 통해 세션을 하이제킹합니다. 그로인해서 세션 ID를 가진 쿠키로 사용자의 계정으로 로그인이 가능해지는 겁니다.   

CSRF(Cross Site Request Forgery) 인터넷 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위를 특정한 웹사이트에 request하도록 만드는 공격을 말하는데 유저의 권한을 도용합니다. 보통 사용자가 해커가 만든 피싱 사이트에 접속하거나, 위조 요청을 전송하는 서비스에 사용자가 로그인한 상황등이 있습니다.

### 🎈 프레임워크와 라이브러리의 차이점
프레임워크는 구조나 뼈대같은 것을 의미하는데, 라이브러리는 가져다가 사용할 수 있는 도구와 관련이 있습니다. 이 둘의 차이점은 제어의 주체가 어디에/누구에 있느냐가 중요한데, 프레임워크는 전체적인 흐름을 스스로 쥐고 있으며 사용자는 그 정해진 틀에 맞춰서 (안에 들어가서) 코드를 짜 넣는 것입니다. 라이브러리는 제어의 주체는 사용자가 쥐고 있으며 그 흐름을 직접 만드는 것입니다. 예를 들어, 라이브러리는 톱, 삽, 망치 같은 연장을 비유할 수 있는데, 톱, 삽, 망치같은 것들은 자신이 원하는 도구를 마음대로 선택해서 결과물을 만들 수 있는 것이고, 프레임워크는 배, 차, 비행기같은 탈것에 비유할 수 있겠는데, 배, 차 비행기는 각자의 목적에 맞게 (배는 바다, 비행기는 하늘, 차는 땅)사용해야 하며, 차를 사용할 경우 기어, 패달등 사용법을 알면 내가 만들 필요 없이 목적에 맞게 사용할 수 있습니다.

### [🎈 Core Web Vitals](https://web.dev/articles/vitals?hl=ko)
- [최대 콘텐츠 페인트 (LCP)](https://web.dev/articles/lcp?hl=ko): 로드 성능을 측정합니다. 우수한 사용자 환경을 제공하려면 페이지가 처음 로드되기 2.5초 이내에 LCP가 발생해야 합니다.
  - 웹 페이지가 완전히 로드되는 데 걸리는 시간을 측정하는 것이 아니라, 가장 중요한 부분이 로드되는 시점에만 집중함. 즉, 뷰포트 내에서 가장 **큰 페이지 요소(큰 텍스트 블록, 이미지 또는 비디오)를 표시하는 데 걸리는 시간**을 측정
- [다음 페인트에 대한 상호작용 (INP)](https://web.dev/articles/inp?hl=ko): 상호작용을 측정합니다. 우수한 사용자 환경을 제공하려면 페이지의 INP가 200밀리초 이하여야 합니다.
  - INP의 목적에 따라 다음과 같은 상호작용 유형만 준수됩니다. 
    - 마우스로 클릭
    - 터치스크린이 있는 기기를 탭합니다.
    - 실제 키보드 또는 터치 키보드의 키를 누릅니다.
  - 원래 최초 입력 지연(FID)였었습니다. INP는 첫 입력 지연 (FID)의 후속 측정항목입니다. 두 가지 모두 반응성 측정항목이지만 FID는 페이지에서의 첫 상호작용의 입력 지연만 측정했습니다. INP는 입력 지연부터 이벤트 핸들러를 실행하는 데 걸리는 시간, 브라우저에서 다음 프레임을 그릴 때까지의 모든 상호작용을 관찰하여 FID를 개선합니다.
  - 개선 방법으로는 자바스크립트 실행 시간 단축, 긴 작업을 더 작은 비동기 작업으로 분할하거나, 불필요한 자바스크립트 제거하는 것입니다.
- [레이아웃 변경 횟수 (CLS)](https://web.dev/articles/cls?hl=ko): 시각적 안정성을 측정합니다. 우수한 사용자 환경을 제공하려면 페이지의 CLS를 0.1. 이하로 유지해야 합니다.
  - **예상된 레이아웃 변경과 예기치 않은 레이아웃 변경**
    - 모든 레이아웃 변경이 나쁜 것은 아닙니다. 실제로 많은 동적 웹 애플리케이션은 페이지에서 요소의 시작 위치를 자주 변경합니다. 레이아웃 변경은 사용자가 예상하지 못한 경우에만 좋지 않습니다.
      - **사용자가 시작한 레이아웃 변경**
        - 사용자 상호작용 (예: 링크 클릭 또는 탭, 버튼 누르기, 검색창에 입력)에 대한 반응으로 발생하는 레이아웃 전환은 일반적으로 사용자의 관계가 명확하게 드러나는 상호작용에 충분히 가깝게 발생하는 경우 문제가 되지 않습니다.
      - **애니메이션 및 전환**
        - 페이지에서 갑작스럽고 예기치 않게 이동하는 콘텐츠는 거의 항상 사용자 환경을 저하시킵니다. 그러나 한 위치에서 다음 위치로 점진적이고 자연스럽게 이동하는 콘텐츠는 사용자가 상황을 더 잘 이해하고 상태 변경 사이를 이동하는 데 도움이 되는 경우가 많습니다.
        - CSS transform 속성을 사용하면 레이아웃 변경을 트리거하지 않고도 요소에 애니메이션을 적용할 수 있습니다.
          - `height` 및 `width` 속성을 변경하는 대신 `transform: scale()`를 사용합니다.
      - 웹폰트 로딩 최적화

### [🎈 lighthouse](https://developer.chrome.com/docs/lighthouse/overview?hl=ko)
웹페이지 품질을 개선하기 위한 오픈소스 자동화 도구. 모든 공개 웹페이지 또는 인증이 필요한 웹페이지에 대해 실행할 수 있음. 성능, 접근성, 프로그레시브 웹 앱, 검색엔진 최적화 등에 대한 감사가 제공.   

- [콘텐츠가 포함된 첫 페인트(First Contentful Paint)](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint?hl=ko)
  - FCP는 사용자가 페이지로 이동한 후 브라우저에서 첫 번째 DOM 콘텐츠를 렌더링하는 데 걸리는 시간을 측정
  - FCP에서 특히 중요한 한 가지 문제는 글꼴 로드 시간이다. 글꼴 로드 속도를 높이는 방법은 웹 글꼴 로드 중에 텍스트가 계속 표시되도록 하면된다.
    - [`font-display`](https://developer.mozilla.org/ko/docs/Web/CSS/@font-face/font-display) 를 사용해서 font face가 로드되지 않은 경우 font face를 사용하려는 요소는 보이지 않는 대체 폰트를 렌더링 하도록 한다. 이 기간 동안 font face가 성공적으로 로드되면 요청된 폰트로 다시 렌더링 된다.
  - [기타 FCP 개선 방법](https://web.dev/articles/fcp?hl=ko#improve-fcp)
    - 렌더링 차단 리소스 제거
    - CSS 축소
    - 사용하지 않는 CSS 삭제
    - 사용하지 않는 JavaScript 삭제하기
    - 필수 출처에 사전 연결
    - 서버 응답 시간 (TTFB) 단축
    - 여러 번의 페이지 리디렉션 피하기
    - 주요 요청 미리 로드
    - 방대한 네트워크 페이로드 방지
    - 효율적인 캐시 정책으로 정적 애셋 제공
    - 과도한 DOM 크기 피하기
    - 중요한 요청 깊이 최소화
    - 요청 수는 작게 유지하고 전송 크기는 작게
- [속도 섹인(speed index)](https://developer.chrome.com/docs/lighthouse/performance/speed-index?hl=ko)
  - 속도 색인은 페이지 로드 중 콘텐츠가 시각적으로 표시되는 속도를 측정
  - Lighthouse는 먼저 브라우저에서 페이지 로드 동영상을 캡처하고 프레임 간의 시각적 진행 상황을 계산
  - 개선 방법
    - [기본 스레드 작업 최소화](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown?hl=ko)
    - [자바스크립트 실행 시간 단축](https://developer.chrome.com/docs/lighthouse/performance/bootup-time?hl=ko)
    - [웹폰트가 로드되는 동안 텍스트가 계속 표시되는지 확인](https://developer.chrome.com/docs/lighthouse/performance/font-display?hl=ko)
- [총 차단 시간(Total Blocking Time)](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time?hl=ko)
  - TBT는 페이지가 마우스 클릭, 화면 탭 또는 키보드 누름과 같은 사용자 입력에 응답하지 못하도록 차단된 총 시간을 측정
  - 합계는 콘텐츠가 포함된 첫 페인트(FCP)와 상호작용(TTI) 시간 사이에 모든 장기 작업의 차단 부분을 더하여 계산
  - TBT 점수를 개선하는 방법
    - 불필요한 자바스크립트 로드, 파싱 또는 실행. 성능 패널에서 코드를 분석하는 동안 기본 스레드가 페이지를 로드하는 데 실제로 필요하지 않은 작업을 실행할때 발생. 코드 분할을 통해 JavaScript 페이로드를 줄이거나 사용하지 않는 코드를 삭제하거나 서드 파티 JavaScript를 효율적으로 로드하면 TBT 점수가 개선된다.
    - 비효율적인 JavaScript문을 제거
- [콘텐츠가 포함된 최대 페인트(Largest Contentful Paint)](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint?hl=ko)
  - LCP는 표시 영역에서 가장 큰 콘텐츠 요소가 화면에 렌더링될 때 측정
  - LCP 시간의 대부분은 HTML 문서 및 LCP 소스를 로드하는 데 사용되어야 함.
  - [LCP 점수를 개선하는 방법](https://web.dev/articles/optimize-lcp?hl=ko#how-to-optimize-each-part)
    - LCP 시간의 대부분은 HTML 문서 및 LCP 소스를 로드하는 데 사용되어야함. LCP는 총 4단계로 나눠짐.
      - 첫 바이트까지의 시간 (TTFB)
      - 리소스 로드 지연
      - 리소스 로드 시간
      - 요소 렌더링 지연
