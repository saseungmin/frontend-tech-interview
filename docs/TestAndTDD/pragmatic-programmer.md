# 🍭 실용주의 프로그래머

## Topic 41. 테스트로 코딩하기

개발자들에게 왜 테스트를 쓰냐고 물어보면 우리가 천공 카드에 코딩하냐고 물어본 것처럼 우리를 처다본다. 그러고는 "우리 코드가 잘 작동하는지 확이하려는 거죠."라고 대답한다. 말끝에 차마 입에 담지 못한 "바보같이"가 들리는 것이다. 하지만 우리는 이 대답이 틀렸다고 생각한다.   

그렇다면 우리가 생각하는 테스트의 중요한 가치는 무엇일까? 여러분은 왜 테스트를 해야 한다고 생각하는가?

> **Tip 66. 테스트는 버그를 찾기 위한 것이 아니다.**

우리는 테스트의 주요한 이득이 테스트를 실행할 때가 아니라 테스트에 대해 생각하고, 테스트를 작성할 때 생긴다고 믿는다.

### 🥕 테스트에 대해 생각하기

일단 함수를 작성했다고 가정해 보자. 이제 테스트를 해야 한다. 어떻게 해야 할까? 일단 테스트 데이터를 사용해야 할 것이다. 아마 여러분이 관리하는 데이터베이스를 연결할 것이다.

```ruby
def return_avid_users(db) do
```

그다음으로는 어떻게 테스트 데이터를 채울지 생각해야 한다. 요구 사항은 "한 주에 동영상을 10개 넘게 보는 사람 목록"이다. 테스트 데이터를 작성하려면 어떤 필드르 쓸지 알아야 한다. 하지만 우리는 요구 사항이 정확하게 무엇을 의미하는지 모르고 사업 부서 담당자는 연락이 안 된다. 필드 이름을 매개 변수로 넘기는 꼼수를 쓰자. 그러면 일단 현재 코드의 테스트가 가능하다. 필요하면 나중에 바꾸면 될 것이다.   

```ruby
def return_avid_users(db, qualifying_fields_name) do
```

테스트에 대해 생각하는 것으로 시작했는데 코드 한 줄 쓰지 않고도 두 가지를 발견했다. 그리고 이를 바탕으로 우리 메서드의 API를 변경했다.

### 🥕 테스트가 코딩을 주도한다
이전 예에서 테스트에 대해 생각함으로써 우리 코드의 결합도는 낮추고 유연성은 올릴 수 있었다. 우리 메서드의 테스트 작성에 대해 생각함으로써 코드의 작성자가 아니라 사용자인 것처럼 메서드를 외부의 시선으로 보게 되었다.

> **Tip 67. 테스트가 코드의 첫 번째 사용자다.**

이것이 테스트가 주는 가장 큰 이득일지 모른다. 테스트는 우리의 코딩을 인도하는 필수 피드백이다.   
다른 코드와 긴밀하게 결합된 함수나 메서드는 테스트하기 힘들다. 메서드를 실행하기도 전에 온갖 환경 구성을 한참 해야 하기 때문이다. 즉, 무언가를 테스트하기 좋게 만들면 결합도도 낮아진다.   

게다가 무언가를 테스트하려면 그것을 이해해야만 한다. 코딩을 시작하기 전에 경계 조건의 테스트와 경계 조건에서 어떻게 동작해야 하는지를 먼저 생각해본다면, 아마 함수를 단순하게 만드는 코드 패턴을 찾을 수 있을 것이다. 테스트해야 하는 오류 조건에 대해 생각해 본다면 그에 맞게 함수 구조를 잡을 것이다.   

#### 테스트 주도 개발
테스트를 먼저 생각하는 것의 이점이 이렇게 많다 보니 아예 테스트를 먼저 작성하자고 주장하는 프로그래밍 유파도 있다. 그들은 "테스트 주도 개발(TDD)"이라고 부르는 기법을 사용한다. 테스트 우선 개발이라고 부르기도 한다.   

TDD의 기본 주기는 다음과 같다.

1. 추가하고 싶은 작은 기능 하나를 결정한다.
2. 그 기능을 구현되었을 때 통과하게 될 테스트를 하나 작성한다.
3. 테스트를 실행한다. 다른 테스트는 통과하고 방금 추가한 테스트 딱 하나만 실패햐아 한다.
4. 실패하는 테스트를 통과시킬 수 있는 최소한의 코드만 작성한다. 그리고 이제 모든 테스트가 통과하는지 확인한다.
5. 코드를 리팩터링한다. 방금 작성한 테스트나 함수를 개선할 수 있는 부분이 없는지 살펴본다. 개선한 후에도 테스트가 계속 통과하는지 확인한다.

TDD 발상의 핵심은 이 반복 주기가 기껏해야 몇 분 정도로 매우 짧아야 한다는 것이다. 따라서 끊임없이 테스트 작성과 테스트를 통과하게 만들기를 반복하게 된다. TDD 작업 방식을 따르면 여러분의 코드는 언제나 테스트가 있을 수밖에 없다. 그리고 이는 언제나 테스트에 대해 생각하게 된다는 의미다.   
하지만 우리는 TDD의 노예가 된 사람들도 보았다. 다음과 같은 징후로 알아볼 수 있다.

- 늘 테스트 커버리지 100%를 달성하기 위해 과도하게 많은 시간을 투자한다.
- 많은 수의 중복 테스트가 생긴다. 예를 들어 많은 TDD 지지자들은 크래스를 처음으로 작성하기 전에 단순히 클래스 이름만 참조해서 실패하는 테스트를 만든다. 테스트가 실패하고 나면 그제야 빈 클래스 정의를 작성하고, 테스트가 통과하게 된다. 하지만 이제 그 테스트는 아무 일도 하지 않는 테스탁 되고 만다. 다음으로 작성하는 테스트도 당연히 클래스를 참조할 것이므로 첫 번째 테스트는 불필요해진다. 나중에 클래스 이름을 바꿔야 하는 곳만 많아질 뿐이다. 그리고 이건 중복 테스트의 사소한 예일 뿐이다.
- 밑에서부터 시작하여 위로 올라가는 방식으로 설계를 한다.

어떻게든 TDD를 실천하라. 하지만 도중에 이따금 멈추어 큰 그리을 살피는 것을 잊지 말라. 초록색 "테스트 통과" 메시지에 중독된 나머지 진짜 문제 해결에는 보탬이 안되는 코드를 한 무더기나 쓰게 되기 쉽다.

### 🥕 TDD: 목표가 어디인지 알아야 한다
전체 문제를 완전히 파악하기 힘들 때 한 번에 테스트 하나씩 작은 단계들을 밟는 것이다. 하지만 이런 접근 방법이 여러분을 잘못된 길로 인도할 수 있다. 코딩을 하는 진짜 이유는 무시한 채 계속해서 쉬운 문제들만 만지작거리도록 유도할 수 있다.

> **상향식 대 하향식, 그리고 여러분이 따라야 하는 방식**   
> 상향식 하향식 둘 다 소프트웨어 개발의 가장 중요한 측면을 놓치고 있다. 바로 개발을 처음 시작할 때는 우리가 무엇을 하고 있는지 모른다는 것이다. 하향식 설계는 전체 요구사항을 시작할 때 다 알고 있다고 가정하지만 사실은 알 수 없다. 상향식 설계는 추상화 계층을 쌓다 보면 결국에는 하나의 최상위 해결 계층에 도착할 것이라고 가정하지만, 목표가 어디인지 모르는데 어떻게 각 계층의 기능을 결정할 수 있단 말인가?   
> **Tip 68. 상향식이나 하향식이 아니라 끝에서 끝까지(end to-end) 만들어라.**   
> 우리는 소프트웨어를 만드는 유일한 방법이 점진적인 방법이라고 굳게 믿는다. 한쪽 끝과 다른 쪽 끝을 잇는 조그만 기능 조각들을 만들고, 그 과정에서 문제에 대하여 배워라. 코드를 채워 나가면서 배운 것을 적용하고, 각 단계마다 고객을 참여시켜서 전체 과정을 안내하도록 하라.

### 🥕 다시 코드로
소프트웨어를 만들 때 맨 처음부터 테스트가 가능하도록 만들고, 코드들을 서로 연결하기 전에 코드를 하나하나 철저하게 테스트해야만 한다.

### 🥕 단위 테스트
소프트웨어 단위 테스트란 일종의 인위적인 환경을 구축한 다음, 테스트할 모듈의 루틴들을 호출한다. 그런 다음 반환된 결과들을 이미 알고 있는 값과 비교해 보거나 똑같은 테스트를 이전에 돌렸을 때 나온 값과 비교하여 올바른지 검사한다. 동일한 테스트를 코드 수정 후 다시 돌려보는 것을 회귀 테스트라고 한다.   

### 🥕 계약을 지키는지 테스트하기
우리는 단위 테스트를 계약을 잘 지키는지 보는 테스트라고 여긴다. 우리는 어떤 코드 단위가 자신이 맺은 계약을 지키는지 확인하는 테스트 케이스를 작성하고자 한다. 이런 테스트는 우리에게 두 가지를 알려준다. 하나는 코드가 계약을 지키는지 여부고, 다른 하나는 코드로 표현된 계약의 의미가 우리가 생각한 것과 일치하는지 여부다. 우리는 다양한 종류의 테스트 케이스와 경계 조건에서도 모듈이 약속한 대로 기능을 잘 수행하는지 테스트하고 싶다.   

어떤 모듈이 있을 떄 그 모듈의 하위 컴포넌트들을 먼저 테스트하는 방식이다. 하위 컴포넌트들을 모두 검증한 후에야 해당 모듈을 테스트할 수 있다. 만약 `DataFeed`와 `LinearRegression`은 테스트를 통과하는데 테스트를 통과하지 못했다면, 문제가 있거나 아님 하위 컴포넌트를 사용하는 방식에 있다고 거의 확신할 수 있따. 이 기법은 디버깅에 들어가는 노력을 줄여 주는 멋진 방법이다.   

왜 이렇게 번잡한 일을 하는 것일까? 무엇보다도 "시한폭탄", 즉 문제가 프로젝트에서 알려지지 않은 채로 숨어 있다가 나중에 곤란한 시점에 터져 버리는 일을 피하고 싶어서다. 계약을 잘 지키는지 확인하는 테스트를 강조함으로써 프로젝트에서 이후에 벌어질지 모를 재앙을 피하려고 노력하는 것이다.   

> **Tip 69. 테스트할 수 있도록 설계하라.**

### 🥕 임시 테스트
임시(Ad-hoc) 테스트는 우리가 직접 코드를 이리저리 찔러보는 것이다. `console.log()` 한 줄일 수도 있고, 디버거나 IDE 환경, REPL에 직접 실행하면서 입력하느 코드 조각일 수도 있다.   

디버깅 작업이 끝나면 이런 임시 테스트를 정식 테스트의 형태로 만들어두어야 한다. 한 번 잘못된 코드라면 다시 잘못될 가능성이 높다. 여러분이 만든 테스트를 그냥 버리지 말고 기존의 단위 테스트 군단에 합류시켜라.

### 🥕 테스트 접점 만들기
아무리 테스트를 잘 갖추었어도 모든 버그를 발견할 수는 없다.   

이 말은 소프트웨어를 배포한 후에도 테스트할 일이 자주 생긴다는 것이다. 이때 소프트웨어를 배포한 후에도 테스트할 일이 자주 생긴다는 것이다. 어떤 모듈의 내부 상태를 디버거 없이 다양한 형태로 볼 수 있는 방법을 제공할 수도 있다.   
로그 파일에 쌓이는 추적 메시지가 이런 메커니즘 가운데 하나다. 로그 메시지는 반드시 규칙적이고 일관된 형식이어야 한다.   

실행 중인 코드의 내부로 들어갈 수 있는 또 다른 메커니증므로 단축키 조핳ㅂ이나 숨겨진 URL 방식이 있다. 어떤 특정한 키 조합을 누르거나 특정 URL에 접속하면, 상태 정보와 그 외의 것들이 들어 있는 진단 제어 창이 열리게 만드는 것이다.   

더 일반적으로는 기능 스위치를 활용하여 특정 사용자나 사용자 집단에 대해서는 진단 메시지를 더 많이 남기도록 할 수도 있다.

### 🥕 테스트 문화
여러분이 작성하는 모든 소프트웨어는 **언젠가는** 테스트된다. 여러분이나 여러분의 팀이 테스트하지 않으면 결과적으로 사용자들이 테스트하게 된다. 그러니 소프트웨어를 철저하게 테스트할 계획을 세우는 것이 좋다.   

여러분에게 있는 선택지는 그리 많지 않다. "테스트 먼저", "코드와 테스트를 함께", "테스트하지 않음" 셋 중 하나다.   

"테스트 먼저"가 대부분의 상황에서 최상의 선택일 것이다. 테스트를 할 수 밖에 없기 때문이다. 테스트 주도 설계도 여기에 포함된다. 하지만 때에 따라 테스트를 먼저 쓰기가 어렵거나 의미가 없을 수도 있다. 그렇다면 "코드와 테스트를 함꼐"가 대안이 될 수 있다. 코드를 조금 작성하고, 이리저리 만지작저리다가 테스트를 작성하라. 그리고 다시 코드로 넘어간다. 최악의 선택은 흔히들 "나중에 테스트"라고 부르는 것인데, 완전 헛소리다. "나중에 테스트"는 사실 "테스트하지 않음"이란 뜻이다.   

제대로 된 테스트 문화를 가졌다면 모든 테스트가 언제나 통과해야 한다.   
"언제나 실패"하는 불량 테스트를 무시하다 보면 모든 테스트를 무시하게 되기 쉽다. 그리고 악순환의 고리가 시작된다.   

테스트 코드를 다른 제품 코드와 마찬가지로 다뤄라. 결합도를 낮추고, 꺠끗하고 견고하게 유지하라. GUI 시스템의 위젯 위치나 서버 로그에 찍힌 현재 시간, 에러 메시지의 문구처럼 신뢰할 수 없는 것에 의존하지 말라. 이런 종류의 것을 테스트하면 테스트가 더 잘 깨지게 된다.

> **Tip 70. 여러분의 소프트웨어를 테스트하라. 그렇지 않으면 사용자가 테스트하게 된다.**

명심하라. 테스트는 프로그래밍의 일부다. 다른 사람이나 다른 부서에 떠넘길 수 있는 것이 아니다.   
테스트, 설계, 코딩, 이 모든 것이 프로그래밍이다.

> **고백**   
> 나 데이브는 사람들에게 더는 테스트를 쓰지 않는다고 말해 왔다. 테스트를 종교처럼 떠받드는 사람들의 믿음을 흔들기 위한 것도 있고, 또 어느 정도는 테스트를 쓰지 않는 것이 사실이기 때문이기도 하다.   
> 나는 45년간 코딩을 해 왔고, 30년 넘게 늘 자동화 테스트를 써 왔다. 코딩을 시작할 때면 자연스럽게 테스트에 대해 생각한다. 아주 편안하게 느껴진다. 그리고 나느 ㄴ무언가가 편안하게 느껴지면 또 다른 시도를 해 봐야 하는 천성을 타고났다.   
> 그래서 나는 몇 달 전 테스트 쓰기를 그만두고 내 코드에 무슨 일이 벌어지는지 한번 보기로 했다. 놀랍게도 변화는 "크지 않았다." 그래서 왜 그런지 곰곰이 생각해 보았다.   
> **내 생각에 나에게 있어 테스트의 이득은 대부분 테스트에 대하여, 그리고 테스트가 코드에 주는 영향에 대하여 고민하는 과정에서 생기는 듯 하다.** 그리고 꽤 오래 이 일을 해 오다보니 실제로 테스트를 쓰지 않고도 테스트에 대해 생각할 수 있게 되었다. 내 코드는 여전히 테스트하기 쉽다. 아직 테스트하지 않았을 뿐이다.   
> 하지만 이런 관점은 **테스트가 다른 개발자와 소통하는 수단이기도 하다는 측면을 무시한 것이다.** 그래서 이제는 다른 사람들과 공유하는 코드 혹은 외부 라이브러리의 어떤 특성에 의존하는 코드만 테스트를 작성한다.   
> 앤디는 이 상자의 내용을 싣지 말자고 했다. 경험이 부족한 개발자들이 괜히 따라서 테스트를 쓰지 않을까 봐 걱정이라는 것이다. 그래서 나의 타협안은 다음과 같다.   
> **여러분이 테스트를 써야 할까? 그렇다.** 하지만 테스트 작성 경험이 30년 정도 쌓였다면 테스트가 어떤 면에서 도움이 되는지 직접 실험을 해 봐도 좋을 것이다.