# ๐ Functional Programming Conference LiftIO 2021

## ๐ ์ฐ์๋ ์ฐ์ฐ์ผ๋ก ๊พธ๋ ค์ง ๊ฐ๋ฐํ์ ํจ์ํ Scala ํ์ฉ๊ธฐ
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

#### FP ํน์ง
- ๊ธฐ๊ณ ์ค์ฌ ๊ด์ ๊ณผ ์ฌ๋ ์ค์ฌ ๊ด์ ์ ์ฐจ์ด
- ์์ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๋ ํจ์๋ฅผ ํฉ์ฑํด ํฐ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ธฐ ์ฝ๋ค.
- ์ํ๋ ๋ถ์ํจ๊ณผ์์ด ์์ ํจ์์ ์๋ ฅ๊ณผ ์ถ๋ ฅ๋ง์ ๋ค๋ฃฌ๋ค๋ฉด, ๊ทธ๋งํผ ์ถ๋ก ์ด๋ ํ์คํธ๊ฐ ์ฝ๋ค.
- ์๊ฐ๊ณผ ์ํ๋ฅผ ๊ณ ๋ คํ์ง ์์๋ ๋๋ค.
- ๋ฉํฐ์ค๋ ๋ ์ฒ๋ฆฌ๊ฐ ํจ์ฌ ์ฌ์์ง๋ค.

#### ๊ณ ์ฐจํจ์
- ์ด๋ค ํจ์๊ฐ, ๋ค๋ฅธ ํจ์๋ฅผ ์ธ์๋ก ๋ฐ๊ฑฐ๋, ํธ์ถ ๊ฒฐ๊ณผ๋ก ๋ณดํต์ ๊ฐ์ด ์๋ ํจ์๋ฅผ ๋ฐํํ๊ฑฐ๋, ๋๋, ๊ทธ ๋ ๋ค๋ฅผ ํ๋ค. 
- ํจ์๋ฅผ ํ๋ฒํ ๊ฐ์ผ๋ก ์ทจ๊ธํ  ์ ์์ด์ผ ๊ฐ๋ฅ.

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

#### ์์ ํจ์
๊ฐ์ ์ธ์๋ฅผ ๋๊ฒจ ํธ์ถํ๋ฉด, ์ธ์ ๋ ๊ฒฐ๊ณผ๊ฐ์ด ๊ฐ๊ฒ ๋์จ๋ค.    
ํจ์๋ฅผ ํธ์ถํด๋, ๋ณ๋์ ๋ถ์ ํจ๊ณผ๊ฐ ๋ฐ์ํ์ง ์๋๋ค.   

- Impure
```scala
// Impure ํ๋ค.
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

#### (๋ชจ๋ธ์ด๋)monoid

- empty, combine
- ๊ฒฐํฉ๋ฒ์น, ํญ๋ฑ์

#### ์ต์ ๋ชจ๋๋
- pure, flatMap
- ์ต์ ๋ชจ๋๋ - ๊ฐ ์ ๋ฌด, ์๋ฌ ์ ๋ฌด๋ฅผ ๋ค๋ฃจ๊ธฐ ๋ฌด์์ด ํธํ๊ฐ.

#### FP ์ค๋ฌด์์ ์ฐ๋ ค ํ๋ค๋ฉด... ์ด๋ ต์ฃ 
์์ฌ, ๋๋ฃ๋ฅผ ์ค๋, ์ดํด๊ด๊ณ์ ๋ค์๊ฐ FP์ ๊ด์ฌ ์๊ธฐ๋ ์ด๋ ต์ง ์๊ฒ ๋?
์ด๋ฏธ ์ ๊ฐ์ถฐ์ง ๊ธฐ์กด ํ๋ก์ ํธ์ ํฐ ๋ณํ๋ฅผ ๊ฐ์ ธ์ค๊ธฐ๋ ์ด๋ ต๊ณ , ํฐ ๊ท๋ชจ์ ํ์ฌ์์ ์ ๊ท ํ๋ก์ ํธ๋ฅผ ๋งก๋ ๊ฒ์ ์ฝ์ง ์์ ์ผ.

#### ์ค์นผ๋ผ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
๋ช๋ นํ๊ณผ ํจ์ํ์ ํผํฉํด์ ์ฌ์ฉํ  ์ ์๋ค. [Cats](https://typelevel.org/cats/)    
ํจ์ํ ์น ์๋น์ค ๋ผ์ด๋ธ๋ฌ๋ฆฌ [http4s](https://http4s.org/)    
JSON์ [circe](https://circe.github.io/circe/) (ํจ์๋ฅผ ์กฐ๋ฆฝํด์ ์ธ์ฝ๋ ๋์ฝ๋๋ฅผ ์ฌ์ฉํ  ์ ์์)    
[doobie](https://tpolecat.github.io/doobie/) cats๊ธฐ๋ฐ์ผ๋ก ๋ง๋  RDB ์ ๊ทผ (Connection IO ๋ชจ๋๋ ์ฌ์ฉ)    

#### ๋น์ ์ ์๋ฌด์ FP ๋์
##### ๋ช๋ นํ ์ธ์ด์์ ํจ์ํ ํ๋ก๊ทธ๋๋ฐ ๊ฐ๋ฅ
ํจ์๋ก ๊ฐ์ผ๋ก ๋ค๋ฃจ๊ธฐ, ๊ณ ์ฐจํจ์ ํ์ฉ. ํจ์ ์กฐํฉ
vavr.io (functional library for Java)
ํจ๊ณผ(effect)๋ฅผ ์ผ์ผํค๋ ํ๋ก์์ ธ์ ์์ํจ์๋ฅผ ๋ถ๋ฆฌ

##### ํจ์ํ ์ธ์ด๋ฅผ ์ง์์ ์ผ๋ก ์ฐ๊ธฐ ์ํ ์กฐ๊ฑด
- ์ง์์ ์ธ ๊ด์ฌ๊ณผ ๋ฐ๋จ
- ๋ด๊ฒ ๊ทธ๋ฅ ์ค์์น ์์ ๊ฑธ๋ค์ ํฌ๊ธฐํ  ์ฉ๊ธฐ
- ์ถฉ๋ถํ ์์ ๊ฐ
  - ๊ฐ์ธ ํ๋ก์ ํธ๋ก ์ํ ํ๋ จ
  - ์ค๋ฌด ํ๋ก์ ํธ์ ๋จ์ ํ์คํธ ์ฝ๋์ ์ ์ง์  ๋ฐ์ํด์ ๊ฒฝํ์น

##### ํ์์ ์ณ๋ฐ๋ฅธ ์ถ๋ฐ์ 
- ์ ํฌ ํ๋ก์ ํธ์ ํจ์ํ ํ๋ก๊ทธ๋๋ฐ์ ๋์ํ๋ฉด ์ด๋จ๊น์? (์ ๋ X)
  - ์๋ก์ด ์๋์ ๊ฐ์น๋ฅผ ์ฆ๋ชํด์ผ ํ๊ณ , ํ๋  ๋ณํ๋ฅผ ๋ฆฌ๋ํด์ผ ํ๋ค.
- ๊ทธ๋ฅ ์กฐ์ฉํ ๋ฌต๋ฌตํ ์ ์ง๋ฅธ๋ค. ๋๋, ์ ์ฉํ๊ณ  ๋์ ํต๋ณด
  - ์ง๋ฅด๊ณ  ๋์, ์ ์๋๋ ์ง๋ฅผ ๋ฌผ์ด๋ณด์.
  - ๋น๋นํ์ง ๋ชป ํ  ์ด์ ๊ฐ ์๋ค.

## ๐ ํจ์ํ ๋๋ฉ์ธ ์ฃผ๋ ์ค๊ณ ๊ตฌํ
- ์์ : ๊ฒฐ์  ์์คํ
๋ ๊ฐ์ง ํ ์ธ ์ ํ
๋น์จ ํผ์ผํธ
์ ์ก ํ ์ธ

#### Table Driven Design์ ๋ฌธ์ 

๋์ ๋ณต์ก๋
์ธ์ง ๋ถํ๊ฐ ๋์ด๋จ

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
// Discount๊ฐ ๊ฐ์ง ์ ์๋ ๊ฒฝ์ฐ์ ์๋ 16๊ฐ
```

- ์๋ชป๋ ๊ฐ์ ์ ๊ทผ ๊ฐ๋ฅ
- ์ ์ง๋ณด์ํ  ๋ ์๊ธฐ๋ ์ผ
  - ํน์  ํ ์ธ ์ ํ์ ์๋ก์ด ํ๋
    - ๊ณ์ฐ ๊ณผ์ ์ ๋ฐ์ํ๋๊ฑธ ๊น๋จน์๋ค
  - ์๋ก์ด ํ ์ธ ์ ํ ์ถ๊ฐ
    - else if ๋ฌธ ์ถ๊ฐ.

#### ๋์์  ์๋ฃํ (ADT)
- ADT๋ฅผ ์ด์ฉํ ๋๋ฉ์ธ ๋ชจ๋ธ๋ง

```scala
enum Discount:
  case Percentage(percent: Int)
  case Fixed(amount: BigDecimal, currency: Currency)
```

```
ํ ์ธ
  - ๋น์จ: ํผ์ผํธ(์ ์)
  - ์ ์ก: ์ก์(์ค์), ํตํ(ํตํ์ฝ๋)
```

```scala
def discount(subtotal: Money, d: Discount): Money =
  d match {
    case Percentage(percent) => // amount ์ ๊ทผ ๋ถ๊ฐ
    case Fixed(amount, currency) => // percent ์ ๊ทผ ๋ถ๊ฐ
  }
```

ADT๋ก ๋ชจ๋ธ๋ง ์ ์ฅ์ 
- ์ ํจํ ์ํ๋ง ํฌํ ๊ฐ๋ฅ
- ๋ณต์ก๋ ๊ฐ์

ADT ์ผ์ด์ค์ ๋ณต์ก๋
- ๋ ๊ฐ์ง ๊ฒฝ์ฐ์๋ง ์ ๊ฒฝ์ ์ธ ์ ์๋ค.

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


ํ์ด๋ธ ์ฃผ๋ VS. ํจ์ํ

- ํ์ด๋ธ ์ฃผ๋

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

- ํจ์ํ

```scala
enum Discount:
  case Percentage(percent: Int)
  case Fixed(amount: BigDecimal, currency: Currency)
```


EITHER ํ์์ ์ด์ฉํ ๋๋ฉ์ธ ์์ธ ์ฒ๋ฆฌ

Either ADT

```scala
enum Either[+A, +B]:
  case Left(value: A)
  case Right(value: B)
```

๋ฌ์คํธ์ Result๋ ๊ฐ์ ๊ตฌ์กฐ

```rust
pub enum Result<T, E> {
  Ok(T),
  Err(E),
}
```

EITHER ํ์์ ์ฐํธํฅ

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
    h <- oddLength("haskell") // ํ๊ฐํ์ง ์์
  yield s + h

assert(result == Left(LengthError()))
```

๋ค ์ข์๋ฐ ์ค๋ฌด์์ ์ธ ์ ์๋?
- ์ค๋ฅ DB ์ค์  ๊ด๋ฆฌ ์์กด์ฑ ๊ด๋ฆฌ
- ์ด๊ฒ๋ค์ด ๊ฐ๋ฅํ๊ฐ?

#### ์์ ํจ์ํ ํ๋ก๊ทธ๋จ์ ํน์ง
- https://zio.dev/overview/overview_background/

์ ์ฐจ์ 
- ๋ถ๋ถ์ : ๋ชจ๋  ์๋ ฅ์ ์ฒ์งํ์ง ์์(์์ธ)
- ๋น๊ฒฐ์ ์ : ๊ฐ์ ์๋ ฅ, ๋ค๋ฅธ ์ถ๋ ฅ
- ๋น์์: ๋ถ์ํจ๊ณผ, ์คํ ์ค ๊ฐ์ด ๋ณํจ

ํจ์ํ
- ์ ์ฒด์ : ๋ชจ๋  ์๋ ฅ์ ๋ํ ์ถ๋ ฅ์ด ์กด์ฌํจ
- ๊ฒฐ์ ์ : ์๋ ฅ๊ฐ์ด ๊ฐ์ผ๋ฉด ์ถ๋ ฅ๊ฐ๋ ๊ฐ์
- ์์ํจ: ๋ถ์ํจ๊ณผ๊ฐ ์์

์์ ํจ์ํ ์ดํํธ๊ฐ ๊ฐ๋ฅํ๊ฐ์?
๊ฐ๋ฅ: ํจ์ํ ์ดํํธ ๋์์๋ฆฌ

ํ๋ก๊ทธ๋จ์ ๋ช์ธ์ ์คํ์ ๋ถ๋ฆฌํ๋ค.
ํจ์๋ฅผ ์ด์ฉํด ์์ ํ๋ก๊ทธ๋จ์ ํฐ ํ๋ก๊ทธ๋จ์ผ๋ก ์กฐ๋ฆฝํ๋ค.

๋น์ทํ ์ฌ๋ก
- ํ์ด์ฌ ์คํฌ๋ฆฝํธ์ ์ธํฐํ๋ฆฌํฐ
- Abstract Syntax Tree(AST)
- Continuation-Passing Style (CPS)

์: console
ADT

```scala
enum Console[+A]:
  case Return(value: () => A)
  case PrintLine(line: String, rest: Console[A])
  case ReadLine(rest: String => Console[A])
```

console (CONT.1)
ํ๋ก๊ทธ๋จ

```scala
val example1 = Console[Unit] =
  PrintLine("์๋ํ์ธ์, ์ด๋ฆ์ด ๋ฌด์์ธ๊ฐ์?",
    ReadLine(name =>
      PrintLine(s"${name}๋, ๋ฐ๊ฐ์์.",
        Return(() => ()))))
```

console (count.2)
์ธํฐํ๋ฆฌํฐ   
ํจํด ๋งค์นญ์ ํตํด ์คํ   

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
- ์์ ํจ์ํ ์ดํํธ
- ๊ฐ๋ ฅํ ํ์ ์์ ์ฑ
- ๋์์ฑ, ์คํธ๋ฆฌ๋ฐ
- ํ๋ฐํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ํ๊ณ์ ์ปค๋ฎค๋ํฐ
  - ์ค์นผ๋ผ์ Spring
- ์ค์นผ๋ผ์ ๊ฐ์ฒด์งํฅ์ ์ธ ๋ฉด ํ์ฉ
- Cats๋ฑ ๋ค๋ฅธ ํจ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํธํ

##### ์ค๋ฅ ์ฒ๋ฆฌ

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

#### ๊ฐ์ฒด์งํฅ ์ค๊ณ ๊ธฐ๋ฒ ์ฌ์ฌ์ฉ
- FP in small, OOP in large
- ์ธํฐํ์ด์ค์ ๊ตฌํ ๋ถ๋ฆฌ

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

#### ์ ๋ฆฌ
- ๋์์  ์๋ฃํ์ ์ด์ฉํ ๋๋ฉ์ธ ๋ชจ๋ธ๋ง
  - ํ์ด๋ธ ์ฃผ๋ ์ค๊ณ์ ํจ์ํ ์ค๊ณ
  - ํต์  ๊ฐ๋ฅํ ๋ชจ๋ธ ๋ณต์ก๋ ๊ด๋ฆฌ
- ZIO๋ก ์ค์ ๋ก ์ ์ฉํ ํ๋ก๊ทธ๋จ ๋ง๋ค๊ธฐ
  - ํจ์ํ ์ดํํธ ์์คํ
    - ๋ช์ธ์ ์คํ์ ๋ถ๋ฆฌ
  - ZIO
    - ์ค๋ฅ ์ฒ๋ฆฌ
    - ์์กด์ฑ ๊ด๋ฆฌ
