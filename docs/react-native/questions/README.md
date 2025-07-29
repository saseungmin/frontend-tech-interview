# 질문 리스트

## React Native old architecture의 어떠한 문제 떄문에 new architecture가 나오게 되었나?
기존에 react native의 old architecture는 bridge 통신의 근본적인 한계가 있었습니다.   
javascript와 native 레이어 간에 모든 통신이 bridge라는 중간 매개체를 통해 비동기적으로 처리하였는데 javascript 레이어가 데이터를 bridge로 보내고 native 레이어는 이 처리를 기다려야 합니다.   
이로 인해서 불필요한 지연이 발생하고 반응성이 떨어지게 되는 문제가 있었습니다.   

또한, bridge를 통과할때 모든 데이터는 JSON 형태로 직렬화되어야하는데 복잡한 javascript 객체를 문자열로 변환되고 전송되고 다시 파싱하는 과정에서 성능이 손실됩니다.   
이러한 문제 때문에 대용량 데이터 처리시 직렬화/역직렬화 과정에서 심각한 병목 현상이 발생하게 되었습니다.   

그리고 스레드 및 성능 문제도 존재했는데, bridge가 단일 스레드로 동작하여 과부하 시 병목 현상이 발생하여 많은 데이터가 bridge를 통과할 때 직렬화 대기 상황이 발생했습니다.   

또한, UI 렌더링 지연 문제도 있었는데, 빠른 스크롤 시 JavaScript와 Native 간 비동기 통신으로 인한 빈 공간 표시가 되는 문제가 있었고, 특히 긴 리스트에서 많은 컴포넌트를 렌더링할 때 성능 저하가 발생합니다.   

bridge의 단일 스레드로 인해 Bridge를 통해 네이티브 메서드를 호출할 때 결과를 기다리는 동안 메인 스레드가 멈춰 앱 반응성이 저하됩니다. 이 시간 동안 UI 업데이트, 터치 이벤트 처리, 애니메이션이 모두 중단되는 문제가 있습니다.   
이러한 문제 때문에 앱이 안정적으로 60FPS를 달성하기 어려웠습니다. 60FPS는 부드러운 애니메이션의 기준인데, 이를 달성하지 못하면 사용자가 앱이 느리다고 느끼게 됩니다.   

이전 아키텍처에서는 이러한 근본적인 문제로 인해 react 18에서 지원하는 동시성 기능들을 제대로 지원할 수 없습니다.

## 그래서 new architecture는 이러한 문제를 어떻게 개선하였나?

bridge를 완전 제거하고, **JSI(JavaScript Interface)** 를 통해 비동기적인 통신을 해결하였습니다. JavaScript와 네이티브 코드 간 직접적이고 동기적인 상호작용을 가능하게 하고, 기존의 bridge를 통한 직렬화된 비동기 호출에 의존하지 않습니다. 이렇게 동기적으로 가능한 이유는 네이티브 메서드들이 react native가 작동하는 현재 실행 중인 JavaScript 엔진에 등록되어서 직접 호출할 수 있게 됩니다. 때문에 브리지가 없어서 매우 빠릅니다.

> JSI가 동기적으로 동작할 수 있는 이유는 JavaScript 런타임(Hermes, V8)과 Native 코드가 모두 동일한 C++ 메모리 공간에서 실행되어 직접적인 메모리 참조를 통해 통신하기 때문입니다.    
> HostObject가 C++ 메모리에서 관리되고 JS 런타임에 의해 직접 참조되기 때문에, 직렬화나 역직렬화가 필요 없습니다. JavaScript가 HostObject의 메서드를 직접 호출하고, 반환값은 JS 타입(jsi::Value)으로 매핑됩니다.   
> 이는 웹 브라우저에서 JavaScript가 DOM API를 동기적으로 호출하는 것과 본질적으로 동일한 메커니즘입니다.

old architecture에서의 앱 시작시 사용하지도 않을 native 모듈들을 모두 모딜하여 앱 시작 시간이 길어지고 불필요한 메모리 사용 및 배터리 소모가 증가하는 문제가 있었습니다. 이러한 문제를 **TurboModules**를 통해 네이티브 모듈이 등록되고 접근되는 방식을 재구성하여, 지연 로딩과 효율적인 초기화를 할 수 있도록 개선하였습니다. 따라서 필요 시에만 초기화가 가능하여 사용하지 않는 모듈을 로드하지 않아 앱 로드 시간을 줄일 수 있었습니다.   

old architecture에서 레이아웃이 비동기적이여서 렌더링된 뷰를 임베드할 때 레이아웃 점프 문제가 발생했습니다. new architecture에서는 `useLayoutEffect` hook을 사용하여 레이아웃 업데이트를 동기적으로 측정하고 적용할 수 있어서 시각적 점프를 피할 수 있습니다. 이러한 문제를 **Fabric 렌더러**가 해결해주었는데 fabric은 또한 동시 렌더링을 지원하여 UI 업데이트가 메인 스레드를 블로킹하지 않고 일시정지, 재개, 또는 중단될 수 있게 합니다. 이러한 해결 덕분에 react native 앱이 이제 여러 ui 업데이트를 동시에 처리할 수 있습니다. 또한 fabric은 어떤 UI업데이트가 우선순위를 가져야 하고 어떤 업데이트가 기다려야 하는지 결정할 수 있습니다.   
fabric 아키텍처에서 스크롤이나 탭 같은 사용자 상호작용에 최우선 순위를 부여하여 이러한 작업들은 즉시 처리되는 반면, API 요청 같은 덜 긴급한 작업들은 하나씩 낮은 우선순위로 처리됩니다.   
fabric은 또한 react suspense, react native에서 react 동시 기능 활성화, 자동 배칭, `useTransition`과 `useDeferredValue`를 react 18에 도입된 기능들을 활용할 수 있게 되었습니다.

추가적으로 Codegen 기능도 추가되었는데 이는, 기존에 javascript의 타입과 네이티브간의 타입이 다른 문제로 인해 안정성을 보장하지 못하는 문제를 해결합니다. Codegen은 빌드 시점에 JavaScript 인터페이스를 생성하여 타입 안전성 문제를 해결합니다. 이 인터페이스들은 네이티브 코드가 JavaScript 레이어에서 전달된 데이터와 동기화된 상태로 유지되도록 보장합니다.   

> - https://reactnative.dev/architecture/overview
> - https://www.openxcell.com/blog/react-native-new-architecture/
> - https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here
> - https://github.com/anisurrahman072/React-Native-Advanced-Guide/blob/master/New-Architecture/New-Architecture-in-depth.md
> - https://medium.com/@harshitkishor2/react-native-new-architecture-77335db7034f
> - https://medium.com/@DhruvHarsora/deep-dive-into-react-natives-new-architecture-jsi-turbomodules-fabric-yoga-234bbdf853b4
> - https://engineering.rently.com/react-native-fabric-architecture/
> - https://www.brilworks.com/blog/react-native-fabric/
> - https://blog.logrocket.com/react-native-new-architecture-sync-async-rendering/
