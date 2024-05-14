# 🍭 클린 애자일

### P.130 테스트 주도 개발
많은 프로그래머가 애자일을 시도할 때 기술 실천 방법은 빼놓는다. 기술 실천 방법이야말로 애자일의 진짜 핵심이기 떄문이다. TDD와 리팩터링, 단순한 설계, 심지어 짝 프로그래밍도 없다면, 애자일은 원래 의도와는 달리 쓸모없는 빈 껍데기가 되고 만다.   

테스트 주도 개발은 프로그래머의 복식 부기라고 할 수 있다. 구현해야하는 동작을 두 번씩 입력한다. 한 번은 테스트로, 그리고 한 번은 이 테스트를 통과하게 만드는 제품 코드로 말이다. 두 번의 입력은 서로 딱 맞아야 한다.   

TDD를 공부할 떄, 기능을 한 번에 하나씩만 추가한다. 실패하는 테스트 형태로 먼저 하나 추가하고, 이 테스트를 통과하게 만드는 제품 코드 형태로 다시 추가한다. 이렇게 하면 오류를 빠르게 찾을 수 있다.

#### TDD의 세 가지 규칙
1. 해당 코드가 없어서 실패하는 테스트 코드를 쓰기 전에 제품 코드를 먼저 쓰면 안 된다.
2. 테스트 코드를 쓸 때는 실패하도록 만들기 위해 필요한 것보다 더 많이 쓰면 안 된다. 컴파일 실패도 실패로 간주한다.
3. 실패하는 테스트를 통과시키기 위해 필요한 코드보다 더 많은 제품 코드를 쓰면 안 된다.

이 세 가지 규칙을 잘 지킨다면 특정 순간에 한 명을 고른다. 이 프로그래머가 작업하던 코드는 아무리 길어도 1분 전까지는 실행 가능했고, 테스트를 모두 통과했다. 누구를 고르더라도, 어느 시점에 고르더라도 상관없다. 아무리 길어도 1분 전까지는 모든 것이 작동했다. 그렇기 떄문에 쉽게 원인을 알아낼 수 있다.   

디 버깅에 많은 시간을 쓴다는 것은 언제나 그만큼 버그가 많다는 것이다. 테스트 주도 개발을 하면 디버거를 쓸 일이 별로 없기 때문에 디버거에 익수해질 수가 없다.

#### 문서화
이 세 가지 규칙을 따르다보면 만들어지는 테스트는 전체 시스템의 코드 예제가 된다. API 함수를 어떻게 부르는지 알고 싶다면 테스트를 보면 된다. 테스트는 이 함수를 호출하는 모든 방법을 보여 주고, 이 함수가 던지는 모든 예외를 처리하는 방법을 보여 줄 것이다.   

테스트는 테스트하는 시스템을 설명하는 문서의 한 형태다. 이 문서는 프로그래머가 능숙하게 구사하는 언어로 쓰여 있다. 전혀 모호하지 않고, 규칙이 정해져 있어서 실행할 수 있을 정도다. 프로그래머에게 완벽한 형식의 문서가 있다면, 코드 형태일 것이다. 테스트가 바로 그렇다.   

더 좋은 것은 테스트 자체만으로는 시스템을 만들지 못한다는 것이다. 테스트끼리는 서로 묶여 있지 않다. 테스트 간에는 의존성도 없다. 각 테스트는 시스템 중 작은 부분의 동작을 설명하는 작고 독립적인 코드 조각일 뿐이다.

#### 재미
제품을 다 만든 이후에 테스트를 작성해 본 적이 있다면, 재미없는 일이라는 것을 알 것이다. 잘 작동하는 것을 알고 있으니 재미가 없다.   

세 가지 규칙을 따라서 테스트를 먼저 작성하면 재미있다. 테스트 하나가 모두 도전이다. 테스트를 통과하게 만들 때마다 작은 성공을 거두는 것이다. 세 가지 규칙을 따른다면 작업 과정은 작은 도전과 성공의 연속이 된다.   

#### 완벽함
사후 테스트 추가는 이미 손으로 테스트해 봐서 잘 작동한다는 것을 알고 있지만, 의무감에 테스트를 쓰고 있을 것이다. 테스트를 추가할 때마다 테스트가 통과하는 것은 당연한 일이다.   

그러다 보면 테스트를 만들기 힘든 경우를 만나게 될 것이다. 테스트를 만들기 힘든 이유는 테스트 가능 여부를 생각하지 않으면서 코드를 작성하고, 설계할 때도 테스트를 고려하지 않았기 때문이다. 이 코드의 테스트를 만들려면 결합된 곳을 몇 군데 깨고, 추상화를 몇 군데 하고, 함수 호출과 인자 몇 개를 이리저리 옮겨야 할 거 같다. 결국 코드의 구조을 뜯어고쳐야 한다. 이미 코드가 잘 작동하는데 굳이 고치려하니 왠지 일이 더 커 보인다.   

일정은 빡빡하고, 더 급한 일이 많이 기다리고 있다. 일단 테스트는 저리 치워놓자. 테스트는 굳이 필요하지 않다거나, 나중에 돌아와서 다시 작성하면 된다고 자기 합리화를 한다. 이렇게 테스트에 구멍을 남겨놓게 되는 것이다.    

테스트가 통과한다고 해서, 이것을 근거로 내릴 수 있는 결정은 없다. 테스트 통과로 얻은 정보는 테스트가 깨지지 않았다는 것뿐이다. 불완전한 테스트 묶음으로는 아무런 결정은 할 수 없다. 하지만 세 가지 규칙을 잘 따랐다면, 모든 제품 코드는 테스트를 통과하게 만들려고 쓴 것이다. 따라서 테스트 묶음이 아주 완벽할 것이다. 테스트가 통과했다면 결정을 내릴 수 있다. 그 결정은 바로 "배포"다.   

세 가지 규칙을 따르면 아주 와벽한 테스트 묶음이 생길 것이다. 하지만 아마 100% 완벽하지는 않을 것이다. 사실 세 가지 규칙을 따르는 것이 현실적이지 않은 상황이 있기 때문이다. 아무리 성실하게 세 가지 규칙을 따르더라도 100% 완벽한 테스트 묶음이 만들어지지는 않는다. 하지만, 배포를 위해 꼭 100%의 완벽함이 필요한 것은 아니다. 커버리지가 90%대 후반 정도면 충분할 것이다. 그리고 이 정도는 당연히 달성할 수 있다.

> 나는 배포 결정을 내릴 수 있을 만큼 완벽한 테스트 묶음을 만들어 왔고, 다른 사람들이 하는 것도 봐 왔다. 이런 사례에서도 커버리지는 100%가 되지 않았다. 하지만 배포 결정을 내리기 충분했다.
> - 테스트 커버리지는 팀 내부용 지표이지 관리 지표가 아니다. 관리자는 아마 이 숫자가 어떤 의미인지 제대로 알지도 못할 것이다. 관리자는 테스트 커버리지를 목표나 목적으로 삼아서는 안 된다. 테스트 커버리지는 팀의 테스트 전략을 확인하기 위해서만 사용해야 한다.
> - 커버리지가 낮다고 빌드에 실패한 것으로 보아서는 안 된다. 이렇게 하면, 프로그래머는 커버리지를 높이기 위해 단언문도 없이 테스트를 넣어 버릴 것이다. 코드 커버리지는 코드와 테스트에 대한 깊은 지식이 있어야 이해할 수 있는 복잡한 주제다. 절대 관리용 지표로 삼아서는 안 된다.

#### 설계
테스트를 먼저 쓰면 테스트하기 힘든 함수는 쓸 수가 없다. 테스트를 먼저 쓰기 때문에 테스트하기 쉬운 설계가 나오는 것은 당연하다. 어떻게 함수를 테스트하기 쉽게 유지할 수 있을까? 결합을 끊고 분리하면 된다. 사실 테스트할 수 있다는 것은 분리했다는 것과 같은 뜻이다.   

전체 시스템에 모두 테스트가 있을 것이므로, 전체 시스템이 잘 분리되어 있을 것이다. 이 세 가지 규칙이 훨씬 더 잘 분리된 설계를 하도록 만든다.

#### 용기
TDD를 하는 진정한 이유는 용기이다.    

리팩토링시 코드를 두려워하게 된다. 코드를 건드리는 것을 두려워하고, 코드가 망가뜨릴 때 당신에게 벌어질 일을 두려워한다. 그래서 코드를 정리하는 데 실패한다. 코드를 개선하는 데 실패한다. 이리저리 결합이 생기고, 중복인 코드가 계속 추가될 것이다. 그렇기 때문에 작업에 걸리는 시간은 기하급수적으로 증가할 것이다.   

결국 관리자는 좌절할 것이고 시스템 밑바닥에서부터 다시 만들자는 프로그래머들의 요구를 수용하고 만다. 그리고 역사는 반복될 것이다.   

완벽한 테스트 묶음이 있으면 코드를 고치는 두려움이 사라진다. 코드를 정리하는 두려움이 사라진다. 따라서 코드를 정리할 것이다. TDD는 용기를 준다. 용기가 있어야 코드를 깨끗하고 정돈된 상태로 관리할 수 있다.

### P.140 리팩터링
리팩터링은 코드의 구조를 개선하면서 동작은 바꾸지 않는 실천 방법이다. 프로그램의 동작은 테스트로 정의해야 한다. 다시 말해서, 테스트를 꺠먹지 않으면서 이름이나 클래스, 함수, 표현식을 변경하는 것이다. 동작에 영향을 주지 않으면서 시스템 구조를 개선한다.   

당연히 리팩터링은 TDD와 밀접한 관련이 있다. 두려움 없이 코드를 리팩터링하려면, 무언가 꺠 먹지 않았다는 확신을 얻을 수 있는 테스트 묶음이 필요하다.   

리팩터링 과정에서 하는 일은 사소하게는 코드를 조금 더 보기 좋게 만드는 것부터 근본적인 구조 변경까지 다양하다. 이 모든 일이 일어나는 동안, 테스트는 계속해서 통과해야 한다.

#### 빨강/초록/리팩터링
본질적으로 리팩터링은 TDD의 세 가지 규칙을 반복함으로써 이루어진다.   
리팩터링에서는 빨강/초록/리팩터링 주기라고 부른다.   

1. 먼저, 실패하는 테스트를 만든다.
2. 그리고 이 테스트를 통과하게 만든다.
3. 그리고 코드를 정리한다.
4. 1단계로 돌아간다.

여기서 핵심은 프로그래밍이라는 과업을 작동하는 코드를 쓰는 것과 정리하기라는 두 가지 다른 측면으로 분리한 것이다. 두 가지 측면을 동시에 다루는 것은 어려울 수밖에 없다. 그러므로 두 가지 측면을 두 가지 다른 활동으로 분리한다.   

쉽게 말하면, 깨끗한 코드를 만드는 것을 고사하고, 그저 테스트를 통과하게 만드는 것만으로도 충분히 어렵다. 그러니 먼저 코드가 작동하게 만드는 데만 집중하자. 일단 머리에 떠오르는 어떤 지저분한 수단이든 동원해서 말이다. 그리고 일단 작동하면, 테스트는 통과했을 것이고, 이제 그동안 만든 지저분한 것들을 정리하자.   

이렇게 보면 리팩터링이 연속적인 과정이라는 것이 명확해진다. 따로 일정을 잡고 하는 작업이 아니라는 말이다. 며칠 동안 거대한 난장판을 만들다가 한참 후에야 치우는 것이 아니다. 1분 혹은 2분 동안 조금 헝클어뜨리고는, 바로 치우는 것이다.   

리팩터링이라는 단어가 일정에 나타나서는 안 된다. 리팩터링은 계획을 잡고 하는 활동이 아니다. 리팩터링할 시간을 따로 할당해서도 안 된다. 리팩터링은 소프트웨어를 작성할 때 몇 분마다, 혹은 몇 시간마다 하는 일상적인 작업의 일부일 뿐이다.   

#### 더 큰 리팩터링
가끔은 요구 사항이 바뀌어서 현재의 설계나 구성이 더는 최적이 아니게 될 수 있다. 그래서 시스템 구조를 꽈 많이 바꿔야 할 수도 있다. 이런 변경도 빨강/초록/리팩터링 주기 안에서 일어나야 한다. 이런 설계 변경은 며칠, 몇 주, 아니면 몇 달이 걸릴 수도 있다. 이 과정내내 시스템의 테스트는 계속해서 통과해야 한다. 서비스 배포도 계속해서 가능해야 한다. 설계 변경으로 인한 이관 작업이 완전히 끝나지 않는 상황이더라도 말이다.   