# 질문 리스트

## React Native란 무엇이고 React랑은 어떻게 다를까?

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

## react native의 animated와 react-native-reanimated의 차이
React Native는 Animated API는 기본적으로 JavaScript 스레드에서 실행되지만, `useNativeDiver: true` 옵션을 사용하여 네이티브 스레드에서 실행이 가능합니다. 하지만, 네이티브 드라이버 사용 시에도 모든 속성이 지원되지는 않는 단점이 있습니다. 비레이아웃 속성만 애니메이션할 수 있습니다.(`transform`과 `opacity`는 작동하지만 `Flexbox`와 `position` 속성은 작동하지 않음.)   

그에 비해 react native reanimated는 기본적으로 UI 스레드에서 실행되며, javascript 스레드에 부하를 생성하지 않고 모든 네이티브 속성의 애니메이션을 지원합니다.   또한, Animated API 같은 경우 60FPS에서 애니메이션을 수행하도록 하드코딩되어 있어 그 이상의 부드러운 애니메이션이 제한적이지만, reanimated는 최대 120FPS 이상의 부드러운 애니메이션을 제공합니다.   

Reanimated는 React Native의 메인 JavaScript 스레드를 완전히 우회하여 애니메이션을 실행할 수 있게 합니다. 애니메이션 러너가 완전히 격리되어 있어서, 애플리케이션 로직(컴포넌트 렌더링, 데이터 가져오기 및 처리 등)이 애니메이션 성능에 영향을 주지 않습니다.   

추가적으로 react native reanimated에는 worklets의 개념이 있는데 worklets은 UI 스레드에서 실행되는 JavaScript 함수입니다. 이를 통해 브리지 비용을 걱정하지 않고 javascript로 네이티브 수준의 애니메이션 명령을 정의할 수 있습니다. 기능은 매우 강력하지만, 추론하기 어려울 수 있는게 단점입니다.   

또한, react native reanimated shared value는 `Animated.Values`와 비교할 수 있는데 이들은 "애니메이션 가능한" 데이터를 운반하고, 반응성의 개념을 제공하며, 애니메이션을 구동하는 유사한 목적을 제공합니다.   
shared values가 필요한 이유는 공유 메모리 개념을 제공하는 것입니다. `useSharedValue`를 사용하여 shared value를 생성하면, 네이티브 측에 메모리 블록을 할당하고 거기에 값을 저장합니다.    

> 네이티브 측의 정확한 위치는 worklet runtime(UI 스레드에서 실행되는 별도의 javascript 런타임), JSI C++ Layer(스레드 간 통신과 메모리 관리를 담당하는 C++ 레이어), 실제 네이티브 플랫폼(iOS/Android의 네이티브 UI 시스템)으로 Shared Value의 실제 데이터는 **Worklet Runtime**에 저장되며, **JSI C++ 레이어**를 통해 React Native JS 스레드와 동기화됩니다. 이를 통해 애니메이션이 React의 렌더링 사이클과 독립적으로 UI 스레드에서 부드럽게 실행될 수 있는 것입니다.

그렇기 때문에 shared values는 UI 스레드에서 업데이트되고 읽히도록 최적화되어 있습니다. 따라서 UI스레드에서 수행되는 읽기와 쓰기는 모두 동기적입니다. 하지만 이러한 선택으로 JS 스레드에서 수행된 업데이트는 모두 비동기적입니다. 업데이트는 즉시 이루어지는 대신, Reanimated 코어는 UI 스레드에서 수행될 업데이트를 스케줄링하여 동시성 문제를 방지합니다.   
이러한 이유는 shared value는 단순한 javascript 객체이므로 일반적인 React 리렌더를 트리거하지 않습니다. 이것이 바로 Shared Values가 성능상 이점을 제공하는 핵심 이유로, 애니메이션 값이 변경되어도 React 컴포넌트가 리렌더되지 않으므로, 애니메이션이 React의 렌더링 사이클과 독립적으로 UI 스레드에서 부드럽게 실행될 수 있습니다.  

> - https://docs.swmansion.com/react-native-reanimated/docs/guides/worklets
> - https://github.com/software-mansion/react-native-reanimated/discussions/7264
> - https://docs.swmansion.com/react-native-reanimated/docs/core/useSharedValue

## FlatList랑 ScrollView의 차이는 무엇이고 어떤 상황에서 사용하는지?
ScrollView는 모든 자식 컴포넌트를 한 번에 렌더링하며, 화면에 보이지 않는 요소들도 모두 메모리에 로드합니다. 때문에 모든 아이템을 한 번에 렌더링하므로 초기 렌더링 시간이 길어지고 메모리 사용량이 증가합니다. 그래서 ScrollView는 작고 고정된 개수의 아이템을 표시하거나 정적인 콘텐츠일 경우에 사용할 수 있습니다.

반면에 FlatList는 가상 스크롤링을 사용하여 현재 보이는 아이템들만 렌더링하고, 화면에서 벗어난 아이템들은 빈공간으로 처리하여, 기본적으로 10개 아이템만 렌더링하고 스크롤할 때마다 필요한 아이템을 동적으로 로드하여 메모리에 효율적입니다. 이러한 특성 떄문에 FlatList는 화면에서 벗어난 컴포넌트를 언마운트하고 다시 돌아올 때 재생성하므로 내부 상태가 초기화됩니다. 따라서 대량의 데이터나 동적 리스트를 표시하거나 무한 스크롤이나 지연 로딩이 필요할 때, 성능 최적화가 중요한 긴 리스트인 경우에 사용하면 좋습니다.

### 그렇다면, FlatList보다 FlashList 좋다는데 FlashList는 FlatList의 어떤 문제를 개선하여 성능이 더 좋은건지?
FlatList는 가상화 기술을 사용하여 현재 보이는 아이템들만 렌더링하고, 뷰포트 외우의 아이템들은 언마운트하여 메모리를 절약하고 성능을 향상 시킵니다. 하지만 이 방식은 컴포넌트를 마운트하고 언마운트하는 과정에서 디바이스 리소스를 소모하는 오버헤드가 발생합니다.   

이러한 문제를 FlashList는 가상화 대신 Cell Recycling 전략을 사용합니다. 메모리에 고정된 컴포넌트 인스턴스 풀을 유지하고, 아이템이 화면에서 벗어날 때 같은 컴포넌트를 새로운 데이터로 재사용합니다. 보이지 않는 아이템은 메모리에서 해제하는 것은 더 많은 객체 생성과 가비지 컬렉션을 유발하므로, FlashList는 리사이클링이 성능이나 메모리 효율성을 손상시키지 않으면서 무한 리스트를 렌더링하는 최상의 방법을 제공합니다.

### FlashList를 사용할때 성능 최적화 할 수 있는 팁이 있다면?
FlashList는 뷰포트 벗어날 때 컴포넌트가 파괴되지 않고 다른 item prop으로 다시 렌더링 됩니다. 따라서 **리사이클링 시 가능한 한 적은 것들이 다시 렌더링되고 재계산되도록 최적화**해야 합니다.   

아이템 내부에 key prop이 있다면 제거하는게 좋습니다. react에서는 list item에 key를 설정하는것을 권장하지만 FlashList의 핵심 성능 이점은 컴포넌트를 생성하고 파괴하는 것 대신 재활용하는 것인데, 서로 다른 데이터 아이템 간에 변경되는 key prop을 추가하면 react가 컴포넌트를 완전히 다른 것으로 취급하여 컴포넌트 트리를 완전히 재생성하게 됩니다. 따라서 FlashList의 재활용하는 이점을 제대로 누릴수 없게 됩니다.   

서로 다른 타입의 셀 컴포넌트가 있을때, `getItemType`을 활용해서 서로 다른 타입의 아이템을 재활용하지 않아 재렌더링이 더 빨라집니다.   

아이템에 직접 의존하지 않는 무거운 컴포넌트는 `memo`로 감쌉니다.   

많은 리소스를 사용하는 계산이 있다면 메모이제이션을 고려하거나 더 빠르게 만들거나 완전히 제거하는게 좋습니다.

> - https://shopify.github.io/flash-list/docs/fundamentals/performance/
> - https://shopify.github.io/flash-list/docs/recycling/
> - https://medium.com/@anisurrahmanbup/react-native-flashlist-performant-list-view-implementation-analysis-8b29df8f2560

## react native에서 개발할 때 빈 화면이 나오는 에러의 이유와 crash나는 에러의 차이는?

## code push의 동작 원리
