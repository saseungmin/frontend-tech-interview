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
