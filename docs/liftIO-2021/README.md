# 👉 Functional Programming Conference LiftIO 2021

## 🎈 연속된 우연으로 꾸려진 개발팀의 함수형 Scala 활용기
#### [Github Repo](https://github.com/hatemogi/liftio2021-scala)

```scala
package purecoincidence

object HigherLevel extends App {
  def factA(n: Int): Int = {
    var r = 1
    for {
      i <- 1 to n
    } r *= i
    r
  }

  def factB(n: Int): Int =
    if (n <= 1) 1
    else n * factB(n - 1)

  def factC(n: Int): Int =
    (1 to n).product

  println((
    factA(5),
    factB(5),
    factC(5)
  ))  // => (120,120,120)
}
```

#### FP 특징
- 기계 중심 관점과 사람 중심 관점의 차이
- 작은 문제를 해결하는 함수를 합성해 큰 문제를 해결하기 쉽다.
- 상태나 부수효과없이 순수 함수의 입력과 출력만을 다룬다면, 그만큼 추론이나 테스트가 쉽다.
- 시간과 상태를 고려하지 않아도 된다.
- 멀티스레드 처리가 훨씬 쉬워진다.

#### 고차함수
- 어떤 함수가, 다른 함수를 인수로 받거나, 호출 결과로 보통의 값이 아닌 함수를 반환하거나, 또는, 그 둘 다를 한다. 
- 함수를 평법한 값으로 취급할 수 있어야 가능.

```scala
package purecoincidence

object HigherOrderFunction {
  def multiple(n: Int): Int => Int =
    x => x * n

  def pow(r: Int): Int => Int =
    x => List.fill(r)(x).product

  val triple: Int => Int = multiple(3)
  val square: Int => Int = pow(2)

  def main(args: Array[String]) =
    println((
      List(1, 2, 3, 4).map(triple compose square),
      List(1, 2, 3, 4).map(square).map(triple)
    ))     // => List(3, 12, 27, 48), ...
}
```

#### 순수 함수
같은 인수를 넘겨 호출하면, 언제나 결과값이 같게 나온다.    
함수를 호출해도, 별도의 부수 효과가 발생하지 않는다.   

- Impure
```scala
// Impure 하다.
package purecoincidence

object Impurity extends App {
  var current: Int = 0
  def impure(n: Int): Int = {
    current += n
    current
  }

  val i = impure(2)

  println((
    i + i,
    impure(2) + i,
    impure(2) + impure(2)
  ))  // (4,6,14)
}
```

- pure

```scala
package purecoincidence

object Purity extends App {
  def pure(a: Int, b: Int): Int =
    2*a*a + 3*b    // 2a^2 + 3b

  val p = pure(2, 3)   // => 17

  println((
    p + p,
    pure(2, 3) + p,
    pure(2, 3) + pure(2, 3),
  ))    // => (34,34,34)
}
```

```scala
package purecoincidence

object PurelyLong extends App {
  def pure(a: Int, b: Int): Int =
    2*a*a + 3*b    // 2a^2 + 3b

  def expressionA(a: Int, b: Int): Int =
    4*a*a + pure(a, b) + 6*b

  def expressionB(a: Int, b: Int): Int =
    3 * pure(a, b)

  println((
    expressionA(3, 4),
    expressionB(3, 4)
  ))    // => (90,90)
}
```

#### (모노이드)monoid

- empty, combine
- 결합법칙, 항등원

#### 옵션 모나드
- pure, flatMap
- 옵션 모나드 - 값 유무, 에러 유무를 다루기 무엇이 편한가.

#### FP 실무에서 쓰려 한다면... 어렵죠
상사, 동료를 설득, 이해관계자 다수가 FP에 관심 있기는 어렵지 않겠나?
이미 잘 갖춰진 기존 프로젝트에 큰 변화를 가져오기는 어렵고, 큰 규모의 회사에서 신규 프로젝트를 맡는 것은 쉽지 않은 일.

#### 스칼라 라이브러리
명령형과 함수형을 혼합해서 사용할 수 있다. [Cats](https://typelevel.org/cats/)    
함수형 웹 서비스 라이브러리 [http4s](https://http4s.org/)    
JSON은 [circe](https://circe.github.io/circe/) (함수를 조립해서 인코더 디코더를 사용할 수 있음)    
[doobie](https://tpolecat.github.io/doobie/) cats기반으로 만든 RDB 접근 (Connection IO 모나드 사용)    

#### 당신의 업무에 FP 도입
##### 명령형 언어에서 함수형 프로그래밍 가능
함수로 값으로 다루기, 고차함수 활용. 함수 조합
vavr.io (functional library for Java)
효과(effect)를 일으키는 프로시져와 순수함수를 분리

##### 함수형 언어를 직업적으로 쓰기 위한 조건
- 지속적인 관심과 바램
- 내게 그닥 중요치 않은 걸들을 포기할 용기
- 충분한 자신감
  - 개인 프로젝트로 셀프 훈련
  - 실무 프로젝트의 단위 테스트 코드에 점진적 반영해서 경험치

##### 협상의 옳바른 출발점
- 저희 프로젝트에 함수형 프로그래밍을 도입하면 어떨까요? (절대 X)
  - 새로운 시도의 가치를 증명해야 하고, 힘든 변화를 리드해야 한다.
- 그냥 조용히 묵묵히 저지른다. 또는, 적용하고 나서 통보
  - 지르고 나서, 왜 안되는 지를 물어보자.
  - 당당하지 못 할 이유가 없다.

## 🎈 함수형 도메인 주도 설계 구현
- 예제: 결제 시스템
두 가지 할인 유형
비율 퍼센트
정액 할인

#### Table Driven Design의 문제

높은 복잡도
인지 부하가 늘어남

```scala
enum DiscountType:
  case Percentage
  case FixedAmount

class Discount(
  var discountType: DiscountType,
  var percentage: Option[Int],
  var fixedAmount: Option[BigDecimal],
  var fixedAmountCurrency: Option[Currency]
)

C(Discount) = C(discountType) * C(percentage) *
              C(fixedAmount) * C(fixedAmountCurrency)

            = C(DiscountType) C(Option[Int]) *
              C(Option[BigDecimal]) * C(Option[Currency])

            = 2 * 2 * 2 * 2
            = 16
// Discount가 가질 수 있는 경우의 수는 16개
```

- 잘못된 값에 접근 가능
- 유지보수할 때 생기는 일
  - 특정 할인 유형에 새로운 필드
    - 계산 과정에 반영하는걸 까먹었다
  - 새로운 할인 유형 추가
    - else if 문 추가.

#### 대수적 자료형 (ADT)
- ADT를 이용한 도메인 모델링

```scala
enum Discount:
  case Percentage(percent: Int)
  case Fixed(amount: BigDecimal, currency: Currency)
```

```
할인
  - 비율: 퍼센트(정수)
  - 정액: 액수(실수), 통화(통화코드)
```

```scala
def discount(subtotal: Money, d: Discount): Money =
  d match {
    case Percentage(percent) => // amount 접근 불가
    case Fixed(amount, currency) => // percent 접근 불가
  }
```

ADT로 모델링 시 장점
- 유효한 상태만 포현 가능
- 복잡도 감소

ADT 케이스의 복잡도
- 두 가지 경우에만 신경을 쓸 수 있다.

```scala
enum Discount:
  case Percentage(percent: Int)
  case Fixed(amount: BigDecimal, currency: Currency)
```

```scala
C(Discount) = C(Percentage) + C(Fixed)
            = C(percent) + (C(amount) * C(currency))
            = C(Int) + (C(BigDecimal) * C(Currency))
            = 1 + (1 * 1)
            = 2
```


테이블 주도 VS. 함수형

- 테이블 주도

```scala
enum DiscountType:
  case Percentage
  case FixedAmount

class Discount(
  var discountType: DiscountType,
  var percentage: Option[Int],
  var fixedAmount: Option[BigDecimal],
  var fixedAmountCurrency: Option[Currency]
)
```

- 함수형

```scala
enum Discount:
  case Percentage(percent: Int)
  case Fixed(amount: BigDecimal, currency: Currency)
```


EITHER 타입을 이용한 도메인 예외 처리

Either ADT

```scala
enum Either[+A, +B]:
  case Left(value: A)
  case Right(value: B)
```

러스트의 Result도 같은 구조

```rust
pub enum Result<T, E> {
  Ok(T),
  Err(E),
}
```

EITHER 타입은 우편향

```scala
case class LengthError()

def oddLength(str: String): Either[LengthError, Int] =
  str.length match
    case n if n % 2 == 0 => Right(n)
    case n => Left(LengthError())

var result =
  for
    s <- oddLength("scala") // Right(5)
    h <- oddLength("haskell") // Right(7)
  yield s + h

assert(result == Right(12))
```

```scala
var result =
  for
    s <- oddLength("scala") // Right(5)
    j <- oddLength("java") // Left(LengthError())
    h <- oddLength("haskell") // 평가하지 않음
  yield s + h

assert(result == Left(LengthError()))
```

다 좋은데 실무에서 쓸 수 있나?
- 오류 DB 설정 관리 의존성 관리
- 이것들이 가능한가?

#### 순수 함수형 프로그램의 특징
- https://zio.dev/overview/overview_background/

절차적
- 부분적: 모든 입력을 처지하지 않음(예외)
- 비결정적: 같은 입력, 다른 출력
- 비순수: 부수효과, 실행 중 값이 변함

함수형
- 전체적: 모든 입력에 대한 출력이 존재함
- 결정적: 입력값이 같으면 출력값도 같음
- 순수함: 부수효과가 없음

순수 함수형 이펙트가 가능한가요?
가능: 함수형 이펙트 동작원리

프로그램의 명세와 실행을 분리한다.
함수를 이용해 작은 프로그램을 큰 프로그램으로 조립한다.

비슷한 사례
- 파이썬 스크립트와 인터프리터
- Abstract Syntax Tree(AST)
- Continuation-Passing Style (CPS)

예: console
ADT

```scala
enum Console[+A]:
  case Return(value: () => A)
  case PrintLine(line: String, rest: Console[A])
  case ReadLine(rest: String => Console[A])
```

console (CONT.1)
프로그램

```scala
val example1 = Console[Unit] =
  PrintLine("안녕하세요, 이름이 무엇인가요?",
    ReadLine(name =>
      PrintLine(s"${name}님, 반가워요.",
        Return(() => ()))))
```

console (count.2)
인터프리터   
패턴 매칭을 통해 실행   

```scala
def interpret[A](program: Console[A]): A = program match {
  case Return(value) =>
    value()
  case PrintLine(line, next) =>
    println(line)
    interpret(next)
  case ReadLine(next) =>
    interpret(next(scala.io.StdIn.readLine()))
}
```
#### [ZIO](https://zio.dev/)
- 순수 함수형 이펙트
- 강력한 타입 안정성
- 동시성, 스트리밍
- 활발한 라이브러리 생태계와 커뮤니티
  - 스칼라의 Spring
- 스칼라의 객체지향적인 면 활용
- Cats등 다른 함수형 라이브러리 호환

##### 오류 처리

```scala
def findUserByName(name: String): IO[DBError, Option[user]]
def pureValidation(user: User): Either[DomainError, Unit]
def flakyApiCall(x: Int): IO[NetworkError, Remote]

def prog: ZIO[Has[Clock], AppError, Remote] =
  for
    user <- findUserByName("guersam")
      .catchAll(e => IO.fail(AppError.Unexpected(e)))
      .someOrFail(AppError.NotFound("User not found"))

    _ <- IO.from(pureValidation(user))
      .mapError(e => AppError.FromDomainError(e.msg))
```

#### 객체지향 설계 기법 재사용
- FP in small, OOP in large
- 인터페이스와 구현 분리

```scala
trait UserRepo:
  def getById(id: UserId): IO[DBError, User]

case class UserRepoLive(log: Logging, db: Database)
  extends UserRepo:
    // ...

case class TestUserLive(ref: Ref[Map[UserId, User]])
  extends UserRepo:
    // ...
```

#### 정리
- 대수적 자료형을 이용한 도메인 모델링
  - 테이블 주도 설계와 함수형 설계
  - 통제 가능한 모델 복잡도 관리
- ZIO로 실제로 유용한 프로그램 만들기
  - 함수형 이펙트 시스템
    - 명세와 실행을 분리
  - ZIO
    - 오류 처리
    - 의존성 관리
