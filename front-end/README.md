## 👉 Front-end

### 🎈 Yarn Berry를 사용하는 이유
Yarn Berry를 사용하는 이유는 기존에 사용했던 npm, yarn v1에서 발생하는 문제점이 존재하기 때문입니다.   

기존에 의존성을 `node_modules`를 통해 관리하였는데 npm은 패키지를 찾기 위해서 계속 상위 디렉토리의 `node_modules` 폴더를 탐색합니다. 따라서 패키지를 바로 찾지 못할수록 readdir, stat과 같은 느린 I/O 호출이 반복됩니다. 경우에 따라서는 I/O 호출이 중간에 실패하기도 합니다.   

npm은 패키지를 찾지 못하면 상위 디렉토리의 `node_modules` 폴더를 계속 검색합니다. 이 특성 때문에 어떤 의존성을 찾을 수 있는지는 해당 패키지의 상위 디렉토리 환경에 따라 달라집니다.   
예를 들어, 상위 디렉토리가 어떤 `node_modules`를 포함하고 있는지에 따라 의존성을 불러올 수 있기도 하고, 없기도 합니다. 다른 버전의 의존성을 잘못 불러올 수 있는 여지도 존재합니다.

또한 npm을 구성하는 `node_modules` 디렉토리 구조는 매우 큰 공간을 차지합니다. `node_modules` 폴더는 복잡하기 때문에 설치가 유효한지 검증하기 어렵습니다. 예를 들어, 수백 개의 패키지가 서로를 의존하는 복잡한 의존성 트리에서 `node_modules` 디렉토리 구조는 깊어집니다. 이렇게 깊은 트리 구조에서 의존성이 잘 설치되어 있는지 검증하려면 많은 수의 I/O 호출이 필요합니다. 일반적으로 디스크 I/O 호출은 메모리의 자료구조를 다루는 것보다 훨씬 느립니다. 이런 문제로 인해 yarn v1이나 npm은 기본적인 의존성 트리의 유효성까지만 검증하고, 각 패키지의 내용이 올바른지는 확인하지 않습니다.   

그리고 npm 및 yarn v1에서는 중복해서 설치되는 `node_modules`를 아끼기 위해 끌어올리기(Hoisting) 기법을 사용합니다. 끌어올리기에 따라 직접 의존하고 있지 않은 라이브러리를 require() 할 수 있는 현상을 유령 의존성(Phantom Dependency)이라고 부릅니다. 유령 의존성 현상이 발생할 때, package.json에 명시하지 않은 라이브러리를 조용히 사용할 수 있게 됩니다.   

yarn berry는 위에서 언급한 문제를 Plug’n’Play (PnP) 방법을 통해 해결합니다.   
yarn berry는 `node_modules`를 생성하지 않습니다. 대신 `.yarn/cache` 폴더에 의존성의 정보가 저장되고, `.pnp.cjs` 파일에 의존성을 찾을 수 있는 정보가 기록됩니다. `.pnp.cjs`를 이용하면 디스크 I/O 없이 어떤 패키지가 어떤 라이브러리에 의존하는지, 각 라이브러리는 어디에 위치하는지를 바로 알 수 있습니다.   

yarn berry의 PnP 시스템에서 각 의존성은 zip 아카이브로 관리됩니다. 이후 `.pnp.cjs` 파일이 지정하는 바에 따라 동적으로 zip 아카이브의 내용이 참조됩니다. zip 아카이브로 의존성을 관리하면 더 이상 `node_modules` 디렉토리 구조를 생성할 필요가 없기 때문에 설치가 신속히 완료되고, 각 패키지는 버전마다 하나의 zip 아카이브만을 가지기 때문에 중복해서 설치되지 않습니다. 그리고 의존성을 구성하는 파일의 수가 많지 않으므로, 변경 사항을 감지하거나 전체 의존성을 삭제하는 작업이 빠릅니다.   

yarn PnP는 `node_modules`에서와 같이 의존성을 끌어올리지 않습니다. 이로써 각 패키지들은 자신이 `package.json`에 기술하는 의존성에만 접근할 수 있습니다. 기존에 환경에 따라 우연히 작동할 수 있었던 코드들이 보다 엄격히 관리되는 것입니다. 이로써 예기치 못한 버그를 쉽게 일으키던 유령 의존성 현상을 근본적으로 막을 수 있습니다.    

yarn PnP은 의존성을 압축 파일로 관리하기 때문에 의존성의 용량이 작습니다. 또한 각 의존성은 하나의 zip 파일로만 표현되기 때문에 의존성을 구성하는 파일의 숫자가 npm만큼 많지 않습니다. 이처럼 용량과 파일의 숫자가 적기 때문에 yarn berry를 사용하면 의존성을 Git으로 관리할 수 있습니다. 이렇게 yarn berry에서 의존성을 버전 관리에 포함하는 것을 Zero-Install이라고 합니다.   

이처럼 의존성을 버전 관리에 포함하면 새로 저장소를 복제하거나 브랜치를 바꾸었다고 해서 yarn install을 실행하지 않아도 되고 이에 따라 CI에서 의존성 설치하는 시간을 크게 절약할 수 있습니다.

> https://toss.tech/article/node-modules-and-yarn-berry

### 🎈 Next.js의 작동 방식

> https://nextjs.org/learn/foundations/how-nextjs-works
> https://velog.io/@surim014/how-next.js-works

### 🎈 Vercel Edge Function

Vercel의 Edge Functions를 사용하면 경량 [Edge Runtime](https://edge-runtime.vercel.sh/)으로 동적이고 개인화된 콘텐츠를 제공할 수 있습니다.   

Vercel Edge Runtime은 평균적으로 Serverless Functions보다 성능이 뛰어나고 비용 효율적입니다. Edge Functions는 Edge Network에 전 세계적으로 배포되며 이를 트리거하는 사용자와 가장 가까운 지역에서 자동으로 실행될 수 있습니다. 또한 cold boots가 없으므로 코드를 실행하기 전에 시작하는 데 추가 시간이 필요하지 않습니다.   

Edge Functions는 OAuth 콜백 실행, 웹후크 요청 응답 또는 짧은 시간 제한 내에 요청이 완료되지 않으면 실패하는 API와 상호 작용과 같이 가능한 한 빨리 네트워크를 통해 데이터와 상호 작용해야 할 때 유용합니다.

#### Edge Function의 작동 방식
Edge Functions는 Chrome 브라우저에서 사용 하는 것과 동일한 고성능 V8 JavaScript 및 WebAssembly 엔진을 기반으로 하는 Vercel의 Edge Runtime을 사용합니다.   

V8 엔진을 사용하면 컨테이너나 가상 머신이 필요하지 않은 격리된 실행 환경에서 Edge Functions를 실행할 수 있습니다. 이것은 Edge Runtime을 여러 면에서 제한하지만 동시에 경량화합니다. Edge Function 프로세스를 시작하려면 서버리스 기능보다 적은 리소스가 필요하므로 cold boot 시간을 효과적으로 제거합니다.   

Edge Functions의 보편적 이점은 Edge Runtime입니다. 비용 효율적이고 리소스를 최소화합니다. 그러나 Edge Functions를 사용하여 특정 컨텍스트에서 낮은 대기 시간으로 동적 콘텐츠를 제공할 수도 있습니다.   

모든 Edge 기능이 복제되어 Vercel의 Edge Network에 있는 데이터 센터의 글로벌 네트워크에 배포되기 때문에 낮은 대기 시간으로 동적 콘텐츠를 제공할 수 있습니다. 사용자에게 가장 가까운 데이터 센터 또는 데이터베이스 근처 지역에서 호출할 수 있습니다. 또한 지역에 따라 개인화된 콘텐츠를 빠른 속도로 제공할 수 있습니다.   

Edge Functions는 캐시 이후에도 실행되며 응답을 캐시하고 반환할 수 있습니다.

#### 엣지 함수를 사용하는 이유

Edge Functions는 전 세계적으로 분산된 사용자 기반에 대해 평균적으로 Serverless Functions보다 더 빠른 응답을 제공할 수 있습니다. 다음은 Edge Functions가 제공하는 몇 가지 구체적인 이점입니다.   

1. 네트워크 사용 비용 감소
Edge Functions는 지리적으로 사용자 근처 또는 데이터베이스 근처에서 실행할 수 있으므로 네트워크 요청은 serverless function보다 더 짧은 거리를 이동하고 더 낮은 비용을 발생시킬 수 있습니다.   
서버리스 함수는 일반적으로 한 지역에서 배포 및 호출되므로 때때로 사용자에게 응답을 제공하기 전에 데이터베이스에 도달하기 위해 멀리 이동합니다.
2. 대기 시간 감소
데이터베이스나 지리적으로 멀리 떨어진 종속성에 의존하지 않는 Edge Functions는 사용자 근처에서 실행되도록 구성할 수 있습니다. 이로 인해 Serverless Functions보다 훨씬 짧은 대기 시간으로 응답이 사용자에게 전달될 수 있습니다.
3. 개인화된 동적 콘텐츠
Edge Functions에서 사용자 지정 코드를 사용하여 사용자가 함수를 호출하는 Edge 네트워크의 데이터 센터를 기반으로 콘텐츠를 전달할 수 있습니다.
4. 저수준 언어 지원
C 또는 Rust와 같은 언어로 작성된 라이브러리 및 도구를 컴파일하고 Edge Functions에서 사용할 수 있습니다. 자세한 내용은 [WebAssembly](https://vercel.com/docs/concepts/functions/edge-functions/wasm) 문서를 참조하십시오.

#### Edge Function regions
Edge Functions의 장점 중 하나는 방문자와 지리적으로 가까운 데이터 센터에서 실행할 수 있어 네트워크 요청 시간이 단축된다는 것입니다. 그러나 함수가 방문자로부터 멀리 떨어진 데이터 소스에 의존하는 경우 이 이점이 완화됩니다.   

예를 들어 일본의 방문자가 미국에 있는 데이터베이스에 의존하는 함수를 호출한다고 가정합니다. 이 기능은 에지 네트워크의 일본에 있는 시스템에서 호출 되지만 최종 응답에는 Japan -> US -> Japan 왕복이 필요하므로 방문자에게 전체 응답 시간이 걸립니다.   

Edge Function의 효율적인 라우팅을 보장하기 위해 함수가 실행되어야 하는 지역을 지정할 수 있습니다. 그렇게 하려면 configEdge Function이 내보내는 객체를 편집하십시오.

```ts
export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};
```

#### 제한 사항
모든 솔루션과 마찬가지로 Edge Functions는 모든 사용 사례에 적합하지 않을 수 있으며 알아야 할 몇 가지 제한 사항이 있습니다.   

1. 데이터 원본과 Edge Function이 실행되는 위치 사이의 거리로 인해 요청에 원치 않는 대기 시간이 추가될 수 있습니다. 잠재적으로 이 문제를 완화하려면 [Vercel에서 지역 Edge Function 실행에 대한 가이드](https://vercel.com/docs/concepts/edge-network/regions#setting-edge-function-regions-manually)를 읽으십시오.
2. Edge Function의 최대 크기는 [함수에 번들로 제공되는 모든 코드를 포함하여](https://vercel.com/docs/concepts/functions/edge-functions/limitations#code-size-limit) 4MB 입니다.
3. **대부분의 기본 Node.js API는 지원되지 않습니다.** [여기에서 지원되는 Node.js API 목록을 참조하세요.](https://vercel.com/docs/concepts/functions/edge-functions/edge-functions-api)
4. [서버리스 기능과의 비교](https://vercel.com/docs/concepts/limits/overview#functions-comparison)

자세한 내용은 [Edge Functions 제한 페이지](https://vercel.com/docs/concepts/functions/edge-functions/limitations)를 참조하세요.

> https://vercel.com/docs/concepts/functions/edge-functions

### 🎈 [Edge Middleware](https://vercel.com/docs/concepts/functions/edge-middleware)

Edge Middleware는 **요청이 사이트에서 처리 되기 전에 실행되는 코드입니다.** 요청에 따라 응답을 수정할 수 있습니다. 캐시보다 먼저 실행되기 때문에 미들웨어를 사용하는 것은 정적으로 생성된 콘텐츠에 개인화를 제공하는 효과적인 방법입니다. 들어오는 요청에 따라 응답을 반환하기 전에 사용자 지정 논리를 실행하고 재작성, 리디렉션, 헤더 추가 등을 수행할 수 있습니다.   

Edge 미들웨어를 사용하면 사이트 방문자에게 빠르고 개인화된 콘텐츠를 제공할 수 있습니다. Vercel의 [Edge Network](https://vercel.com/docs/concepts/edge-network/overview)에 전역적으로 배포되며 서버 측 로직을 방문자의 출처에 가까운 Edge로 이동할 수 있습니다.   

미들웨어는 Chrome 브라우저에서 사용하는 것과 동일한 고성능 [V8](https://developers.google.com/apps-script/guides/v8-runtime) JavaScript 및 WebAssembly 엔진 에 구축된 Vercel [Edge Runtime](https://edge-runtime.vercel.sh/packages/runtime)을 사용합니다. Edge Runtime은 다음과 같은 Web Standard API의 하위 집합을 노출하고 확장합니다. [FetchEvent](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent), [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response), 그리고 [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request), 들어오는 요청에 따라 응답을 조작하고 구성하는 방법을 더 잘 제어할 수 있습니다. 미들웨어 작성에 대한 자세한 내용은 [미들웨어 API 가이드](https://vercel.com/docs/concepts/functions/edge-middleware/middleware-api)를 참조하세요.   

개발자는 Edge Middleware를 통해 애플리케이션에 추가 크기를 추가하지 않고도 사용자 경험을 보다 효과적으로 제어할 수 있으므로 성능이 향상됩니다. 최종 사용자는 edge에서 실행되기 때문에 대기 시간이 매우 짧은 사전 렌더링되고 개인화된 콘텐츠를 경험합니다.   

미들웨어의 일반적인 사용 사례는 다음과 같습니다.

- [입증(Authentication)](https://vercel.com/templates/next.js/basic-auth-password)
- [지리적 위치(Geolocation)](https://vercel.com/templates/next.js/edge-functions-geolocation)
- [쿠키 작업(Working with cookies)](https://vercel.com/templates/next.js/cookies)
- [A/B 테스트(A/B testing)](https://vercel.com/templates/next.js/ab-testing-simple)
- [봇 보호(Bot protection)](https://vercel.com/templates/next.js/bot-protection-datadome)
- [재작성(Rewrites)](https://vercel.com/templates/next.js/hostname-rewrites)

> https://vercel.com/docs/concepts/functions/edge-middleware
