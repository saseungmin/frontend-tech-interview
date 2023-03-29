# 🐤 Chapter 6. 단위 테스트 스타일

## 🥕 단위 테스트의 세 가지 스타일

단위 테스트는 세 가지 스타일이 있다.
- 출력 기반 테스트
- 상태 기반 테스트
- 통신 기반 테스트

하나의 테스트에서 하나 또는 둘, 심지어 세 가지 스타일 모두를 함께 사용할 수 있다.

### 🎈 출력 기반 테스트 정의
테스트 대상 시스템(SUT)에 입력을 넣고 생성되는 출력을 점검하는 방식이다. 이러한 단위 테스트 스타일은 전역 상태나 내부 상태를 변경하지 않는 코드에만 적용되므로 반환 값만 검증하면 된다.

```cs title="출력 기반 테스트"
public class PriceEngine {
  public decimal CalculateDiscount(params Product[] products) {
    decimal discount = products.Length * 0.01m;
    return Math.Min(discount, 0.2m);
  }
}

[Fact]
public void Discount_of_two_products() {
  var product1 = new Product("Hand wash");
  var product2 = new Product("Shampoo");
  var sut = new PriceEngine();

  decimal discount = sut.CalculateDiscount(product1, product2);

  Assert.Equal(0.02m, discount);
}
```

`CalculateDiscount()` 메서드의 결과는 반환된 할인, 즉 출력 값뿐이다.   

출력 기반 단위 테스트 스타일은 함수형이라고도 한다. 이 이름은 부작용 없는 코드 선호를 강조하는 프로그래밍 방식인 함수형 프로그래밍에 뿌리를 두고 있다.

### 🎈 상태 기반 스타일 정의
상태 기반 스타일은 작업이 완료된 후 시스템 상태를 확인하는 것이다. 이 테스트 스타일에서 상태라는 용어는 SUT나 협력자 중 하나, 또는 데이터베이스나 파일 시스템 등과 같은 프로세스 외부 의존성의 상태 등을 의미할 수 있다.

```cs title="상태 기반 테스트"
public class Order {
  private readonly List<Product> _products = new List<product>();
  public IReadOnlyList<Product> Products => _products.ToList();

  public void AddProduct(Product product) {
    _products.Add(product);
  }
}

[Fact]
public void Adding_a_product_to_an_order() {
  var product = new Product("Hand wash");
  var sut = new Order();

  sut.AddProduct(product);

  Assert.Equal(1, sut.Products.Count);
  Assert.Equal(product, sut.Products[0]);
}
```

테스트는 상품을 추가한 후 `Products` 컬렉션을 검증한다. 출력 기반 테스트의 예제와 달리, `AddProduct()`의 결과는 주문 상태의 변경이다.

### 🎈 통신 기반 스타일 정의
통신 기반 스타일은 목을 사용해 테스트 대상 시스템과 협력자 간의 통신을 검증한다.

```cs title="통신 기반 테스트"
[Fact]
public void Sending_a_greetings_email() {
  var emailGatewayMock = new Mock<IEmailGateway>();
  var sut = new Controller(emailGatewayMock.Object);

  sut.GreetUser("user@email.com");

  emailGatewayMock.Verify(
    x => x.SendGreetingsEmail("user@email.com"),
    Times.Once
  );
}
```

## 🥕 단위 테스트 스타일 비교

### 🎈 회귀 방지와 피드백 속도 지표로 스타일 비교하기
회귀 방지 지표는 특정 스타일에 따라 달라지지 않는다. 회귀 방지 지표는 다음 세 가지 특성으로 결정된다.
- 테스트 중에 실행되는 코드의 양
- 코드 복잡도
- 도메인 유의성

보통 실행하는 코드가 많든 적든 원하는 대로 테스트를 작성할 수 있다. 어떤 스타일도 이 부분에서 도움이 되지 않는다. 코드 복잡도와 도메인 유의성 역시 마찬가지다. 통신 기반 스타일에는 예외가 하나 있다. 남용하면 작은 코드 조각을 검증하고 다른 것은 모두 목을 사용하는 등 피상적인 테스트가 될 수 있다. 하지만 이는 통신 기반 테스트의 결정적인 특징이 아니라 기술을 남요하는 극단적인 사례다.  

테스트 스타일과 테스트 피드백 속도 사이에는 상관관계가 거의 없다. 테스트가 프로세스 외부 의존성과 떨어져 단위 테스트 영역에 있는 한, 모든 스타일은 테스트 실행 속도가 거의 동일하다. 목은 런타임에 지연 시간이 생기는 편이므로 통신 기반 테스트가 약간 나쁠 수 있다. 그러나 이러한 테스트가 수만 개 수준이 아니라면 별로 차이는 없다.

### 🎈 리팩터링 내성 지표로 스타일 비교하기
리팩터링 내성은 리팩터링 중에 발생하는 거짓 양성 수에 대한 척도다. 결국 거짓 양성은 식별할 수 있는 동작이 아니라 코드의 구현 세부 사항에 결합된 테스트의 결과다.   

출력 기반 테스트는 테스트가 테스트 대상 메서드에만 결합되므로 거짓 양성 방지가 가장 우수하다. 이;러한 테스트가 구현 세부 사항에 결합되는 경우는 테스트 대상 메서드가 구현 세부 사항일 때뿐이다.   

상태 기반 테스트는 일반적으로 거짓 양성이 되기 쉽다. 이러한 테스트는 테스트 대상 메서드 외에도 클래스 상태와 함께 작동한다. 상태 기반 테스트는 큰 API 노출 영역에 의존하므로, 구현 세부 사항과 결합할 가능성도 더 높다.   

통신 기반 테스트가 허위 정보에 가장 취약하다. 테스트 대역으로 상호 작용을 확인하는 테스트는 대부분 깨지기 쉽다. 애플리케이션 경계를 넘는 상호 작용을 확인하고 해당 상호 작용의 부작용이 외부 환경에 보이는 경우에만 목이 괜찮다.   

### 🎈 유지 보수성 지표로 스타일 비교하기
유지 보수성은 단위 테스트의 유지비를 측정하며, 다음 두 가지 특성으로 정의한다.
- 테스트를 이해하기 얼마나 어려운가?
- 테스트를 실행하기 얼마나 어려운가?

테스트가 크면, 필요할 때 파악하기도 변경하기도 어려우므로 유지 보수가 쉽지 않다. 마찬가지로 하나 이상의 프로세스 외부 의존성과 직접 작동하는 테스트는 데이터베이스 서버 재부팅, 네트워크 연결 문제 해결 등과 같이 운영하는 데 시간이 필요하므로 유지 보수가 어렵다.   

다른 두 가지 스타일과 비교하면, 출력 기반 테스트가 가장 유지 보수하기 용이하다. 출력 기반 테스트는 거의 항상 짧고 간결하므로 유지 보수가 쉽다. 출력 기반 테스트의 기반 코드는 전역 상태나 내부 상태를 변경할 리 없으므로, 프로세스 외부 의존성을 다루지 않는다. 따라서 두 가지 유지 보수성 모두의 측면에서 출력 기반 테스트가 가장 좋다.   

상태 기반 테스트는 일반적으로 출력 기반 테스트보다 유즤 보수가 쉽지 않다. 상태 검증은 종종 출력 검증보다 더 많은 공간을 차지하기 때문이다.

```cs title="많은 공간을 차지하는 상태 검증"
[Fact]
public void Adding_a_comment_to_an_article() {
  var sut = new Article();
  var text = "Comment text";
  var author = "John Doe";
  var now = new DateTime(2019, 4, 1);

  sut.AddComment(text, author, now);

  Assert.Equal(1, sut.Comments.Count);
  Assert.Equal(text, sut.Comments[0].Text);
  Assert.Equal(author, sut.Comments[0].Author);
  Assert.Equal(now, sut.Comments[0].DateCreated);
}
```

이 테스트는 단순하고 댓글이 하나만 있지만, 검증부는 네 줄에 걸쳐 있다. 상태 기반 테스트는 종종 훨신 많은 데이터를 확인해야 하므로 크기가 대폭 커질 수 있다.   

통신 기반 테스트는 유지 보수성 지표에서 출력 기반 테스트와 상태 기반 테스트보다 점수가 낮다. 통신 기반 테스트에는 테스트 대역과 상호 작용 검증을 설정해야 하며, 이는 공간을 많이 차지한다. 목이 사슬 형태로 있을 때 테스트는 더 커지고 유지 보수하기가 어려워진다.

### 🎈 스타일 비교하기: 결론
세 가지 스타일 모두 회귀 방지과 피드백 속도 지표에서는 점수가 같다.   

출력 기반 테스트가 가장 결과가 좋다. 이 스타일은 구현 세부 사항과 거의 결합되지 않으므로 리팩터링 내성을 적절히 유지하고자 주의를 많이 기울일 필요가 없다. 이러한 테스트는 간결하고 프로세스 외부 의존성이 없기 때문에 유지 보수도 쉽다.

||출력 기반|상태 기반|통신 기반|
|:---|:---|:---|:---|
|**리팩터링 내성을 지키기 위해 필요한 노력**|낮음|중간|중간|
|**유지비**|낮음|중간|높음|

상태 기반 테스트와 통신 기반 테스트는 두 지표 모두 좋지 않다. 유출된 구현 세부 사항에 결합할 가능성이 높고, 크기도 커서 유지비가 많이 든다.   
그러므로 항상 다른 것보다 출력 기반 테스트를 선호하라. 하지만 안타깝게도 말하기는 쉬워도 행하기는 어렵다. 출력 기반 스타일은 함수형으로 작성된 코드에만 적용할 수 있고, 대부분의 객체지향 프로그래밍 언어에는 해당하지 않는다.

## 🥕 함수형 아키텍처 이해

### 🎈 함수형 프로그래밍이란?
출력 기반 단위 테스트 스타일은 함수형이라고도 한다. 기반 제품 코드를 함수형 프로그래밍을 이용해 순수 함수 방식으로 작성해야 하기 때문이다.   

함수형 프로그래밍은 수학적 함수(순수 함수라고도 함)를 사용한 프로그래밍이다. 수학적 함수는 숨은 입출력이 없는 함수(또는 메서드)다. 수학적 함수의 모든 입출력은 메서드 이름, 인수, 반환 타입으로 구성된 메서드 시그니처에 명시해야 한다. 수학적 함수는 호출 횟수에 상관없이 주어진 입력에 대해 동일한 출력을 생성한다.

```cs
public decimal CalculateDiscount(Product[] products) {
  decimal discount = products.Length + 0.01m;
  return Math.Min(discount, 0.2m);
}
```

이 메서드는 하나의 입력과 하나의 출력이 있으며, 둘 다 메서드 시그니처에 명시돼 있다. 이로써 `CalculateDiscount()`는 수학적 함수가 된다.

```cs
//     출력     이름               입력
public decimal CalculateDiscount(Product[] products)
```

숨은 입출력이 없는 메서드느 수학에서 말하는 함수의 정의를 준수하기 떄문에 수학적 함수라고 한다.   
입출력을 명시한 수학적 함수는 이에 따르는 테스트가 짧고 간결하며 이해하고 유지 보수하기 쉬우므로 테스트하기가 매우 쉽다. 출력 기반 테스트를 적용할 수 있는 메서드 유형은 수학적 함수뿐이다. 이는 유지 보수성이 뛰어나고 거짓 양성 빈도가 낮다.   

반면에 숨은 입출력은 코드를 테스트하기 힘들게 한다. 숨은 입출력의 유형은 다음과 같다.
- 부작용: 부작용은 메서드 시그니처에 포시되지 않는 출력이며, 따라서 숨어있다.
- 예외: 메서드가 예외를 던지면, 프로그램 흐름에 메서드 시그니처에 설정된 계약을 우회하는 경로를 만든다.
- 내외부 상태에 대한 참조: `DateTime.Now`와 같이 정적 속성을 사용해 현재 날짜와 시간을 가져오는 메서드가 있을 수 있다. 데이터베이스에서 데이터를 질의할 수 있고, 비공개 변경 가능 필드를 참조할 수도 있다. 이 모두 메서드 시그니처에 없는 실행 흐름에 대한 입력이며, 따라서 숨어있다.

메서드가 수학적 함수인지 판별하는 가장 좋은 방법은 프로그램의 동작을 변경하지 않고 해당 메서드에 대한 호출을 반환 값으로 대체할 수 있는지 확인하는 것이다. 메서드 호출을 해당 값으로 바꾸는 것을 참조 투명성이라고 한다.

```cs
public int Increment(int x) {
  return x + 1;
}
```

이 메서드는 수학적 함수다. 다음 두 구문은 서로 동일하다.

```cs
int y = Increment(4);
int y = 5;
```

반면에 다음 메서드는 수학적 함수가 아니다. 반환 값이 메서드의 출력을 모두 나타내지 않으므로 반환 값으로 대체할 수 없다.

```cs
int x = 0;
public int Increment() {
  x++;
  return x;
}
```

### 🎈 함수형 아키텍처란?
함수형 프로그래밍의 목표는 부작용을 완전히 제거하는 것이 아니라 비즈니스 로직을 처리하는 코드와 부작용을 일으키는 코드를 분리하는 것이다. 이 두 가지 책임은 각각만 보더라도 충분히 복잡하다. 모두 고려하면 복잡도가 배가되고 장기적으로 코드의 유지 보수성을 방해한다. 부작용을 비즈니스 연산 끝으로 몰아서 비즈니스 로직을 부작용과 분리한다.   

다음 두 가지 코드 유형을 구분해서 비즈니스 로직과 부작용을 분리할 수 있다.
- 결정을 내리는 코드: 이 코드는 부작용이 필요 없기 때문에 수학적 함수를 사용해 작성할 수 있다.
- 해당 결정에 따라 작용하는 코드: 이 코드는 수학적 함수에 의해 이뤄진 모든 결정을 데이터베이스의 변경이나 메시지 버스로 전송된 메시지와 같이 가시적인 부분으로 변환한다.

결정의 내리는 코드는 종종 함수형 코어라고도 한다. 해당 결정에 따라 작용하는 코드는 가변 셀이다.   
- 가변 셸은 모든 입력을 수집한다.
- 함수형 코어는 결정을 생성한다.
- 셸은 결정을 부작용으로 변환한다.

이 두 계층을 계속 잘 분리하려면, 가변 셸의 의사 결정을 추가하지 않게끔 결정을 나타내는 클래스에 정보가 충분히 있는지 확인해야 한다. 다시 말해, 가변 셸은 가능한 한 아무말도 하지 않아야 한다. 목표는 출력 기반 테스트로 함수형 코어를 두루 두루고 가변 셸을 훨씬 더 적은 수의 통합 테스트에 맡기는 것이다.   

### 🎈 함수형 아키텍처와 육각형 아키텍처 비교
함수형 아키텍처와 육각형 아키텍처는 비슷한 점이 많다. 둘 다 관심사 분리라는 아이디어를 기반으로 한다. 그러나 분리를 둘러싼 구체적인 내용은 다양하다.   

육각형 아키텍처는 도메인 계층과 애플리케이션 서비스 계층을 구별한다. 도메인 계층은 비즈니스 로직에 책임이 있는 반면, 애플리케이션 서비스 계층은 데이터베이스나 SMTP 서비스와 같이 외부 애플리케이션과의 통신에 책임이 있다. 이는 결정과 실행을 분리하는 함수형 아키텍처와 매우 유사하다.   

또 다른 유사점은 의존성 간의 단방향 흐름이다. 육각형 아키텍처에서 도메인 계층 내 클래스는 서로에게만 의존해야 한다. 애플리케이션 서비스 계층의 클래스에 의존해서는 안된다. 마찬가지로 함수형 아키텍처의 불변 코어는 가변 셸에 의존하지 않는다. 자급할 수 있고 외부 계층과 격리돼 작동할 수 있다. 이로 인해 함수형 아키텍처를 테스트하기 쉽다.   

이 둘의 차이점은 부작용에 대한 처리에 있다. 함수형 아키텍처는 모든 부작용을 불변 코어에서 비즈니스 연산 가장자리로 밀어낸다. 이 가장자리는 가변 셸이 처리한다. 반면 육각형 아키텍처는 도메인 계층에 제한하는 한, 도메인 계층으로 인한 부작용도 문제없다. 육각형 아키텍처의 모든 수정 사항은 도메인 계층 내에 있어야 하며, 계층의 경계를 넘어서는 안 된다.

## 🥕 함수형 아키텍처와 출력 기반 테스트로의 전환
상태 기반 테스트와 통신 기반 테스트를 출력 기반 테스트 스타일로 리팩터링할 것이다.   

### 🎈 감사 시스템 소개
샘플 프로젝트는 조직의 모든 방문자를 추적하는 감사 시스템이다. 이 시스템은 가장 최근 파일의 마지막 줄에 방문자의 이름과 방문 시간을 추가한다. 파일당 최대 항목 수에 도달하면 인덱스를 증가시켜 새 파일을 작성한다.

```cs title="감사 시스템의 초기 구현"
public class AuditManager {
  private readonly int _maxEntriesPerFile;
  private readonly string _directoryName;

  public AuditManager(int maxEntriesPerFile, string directoryName) { // 최대 항목 수와 작업 디렉터리를 설정 매개변수로 받는다.
    _maxEntriesPerFile = max EntriesPerFile;
    _directoryName = directoryName;
  }

  public void AddRecord(string visitorName, DateTime timeOfVisit) {
    // 작업 디렉터리에서 전체 파일 목록을 검색
    string[] filePaths = Directory.GetFiles(_directoryName);
    // 인덱스별로 정렬
    (int index, string path)[] sorted = SortByIndex(filePaths);

    string newRecord = visitorName + ';' + timeOfVisit;

    // 아직 감시 파일이 없으면 단일 레코드로 첫 번째 파일을 생성한다.
    if (sorted.Length == 0) {
      string newFile = Path.Combine(_directoryName, "audit+1.txt");
      File.WriteAllText(newFile, newRecord);
      return;
    }

    // 감시 파일이 있으면 최신 파일을 가져와서 파일의 항목 수가 한계에 도달했는지에 따라 새 레코드를 추가하거나 새 파일을 생성한다.
    (int currentFileIndex, string currentFilePath) = sorted.Last();
    List<string> lines = File.ReadAllLines(currentFilePath).ToList();

    if (lines.Count < _maxEntriesPerFile) {
      lines.Add(newRecord);
      string newContent = string.Join("\r\n", lines);
      File.WriteAllText(currentFilePath, newContent);
    } else {
      int newIndex = currentFileIndex + 1;
      string newName = $"audit_{newIndex}.txt";
      string newFile = Path.Combine(_directoryName, newName);
      File.WriteAllText(newFile, newRecord);
    }
  }
}
```

`AuditManager` 클래스는 파일 시스템과 밀접하게 연결돼 있어 그대로 테스트하기가 어렵다. 테스트 전에 파일을 올바른 위치에 배치하고, 테스트가 끝나면 해당 파일을 읽고 내용을 확인한 후 삭제해야 한다.   

병목 지점은 파일 시스템이다. 이는 테스트가 실행 흐름을 방해할 수 있는 공유 의존성이다.   
또 파일 시스템은 테스트를 느리게 한다. 로컬 시스템과 빌드 서버 모두 작업 디렉터리가 있고 테스트할 수 있어야 하므로 유지 보수성도 저하된다.   

한편 파일 시스템에 직접 작동하는 테스트는 단위 테스트의 정의에 맞지 않는다. 단위 테스트의 두 번째와 세 번째 특성을 준수하지 않으므로, 통합 테스트 범주에 속한다.
-  단위 테스트는 단위 동작을 검증하고
-  빠르게 수행하고
-  다른 테스트와 별도로 처리한다.

### 🎈 테스트를 파일 시스템에서 분리하기 위한 목 사용
테스트가 밀접하게 결함된 문제는 일반적으로 파일 시스템을 목으로 처리해 해결한다. 파일의 모든 연산을 별도의 클래스(`IFileSystem`)로 도출하고 `AuditManager`에 생성자로 해당 클래스를 주입할 수 있다. 그런 다음 테스트는 이 클래스를 목으로 처리하고 감사 시스템이 파일에 수행하는 쓰기를 캡처한다.

```cs title="생성자를 통한 파일 시스템의 명시적 주입"
public class AuditManager {
  private readonly int _maxEntriesPerFile;
  private readonly string _directoryName;
  private readonly IFileSystem _fileSystem;

  public AuditManager(
    int maxEntriesPerFile, string directoryName, IFileSystem fileSystem
  ) {
    _maxEntriesPerFile = maxEntriesPerFile;
    _directoryName = directoryName;
    _fileSystem = fileSystem;
  }
}
```

다음은 `AddRecord` 메서드다.

```cs title="새로운 IFileSystem 인터페이스 사용"
  public void AddRecord(string visitorName, DateTime timeOfVisit) {
    // highlight-next-line
    string[] filePaths = _fileSystem.GetFiles(_directoryName);
    (int index, string path)[] sorted = SortByIndex(filePaths);

    string newRecord = visitorName + ';' + timeOfVisit;

    if (sorted.Length == 0) {
      string newFile = Path.Combine(_directoryName, "audit+1.txt");
      // highlight-next-line
      _fileSystem.WriteAllText(newFile, newRecord);
      return;
    }

    (int currentFileIndex, string currentFilePath) = sorted.Last();
    // highlight-next-line
    List<string> lines = _fileSystem.ReadAllLines(currentFilePath).ToList();

    if (lines.Count < _maxEntriesPerFile) {
      lines.Add(newRecord);
      string newContent = string.Join("\r\n", lines);
      // highlight-next-line
      _fileSystem.WriteAllText(currentFilePath, newContent);
    } else {
      int newIndex = currentFileIndex + 1;
      string newName = $"audit_{newIndex}.txt";
      string newFile = Path.Combine(_directoryName, newName);
      // highlight-next-line
      _fileSystem.WriteAllText(newFile, newRecord);
    }
  }
```

이제 `AuditManager`가 파일 시스템에서 분리되므로, 공유 의존성이 사라지고 테스트를 서로 독립적으로 실행할 수 있다. 다음은 그러한 테스트다.

```cs title="목을 이용한 감사 시스템의 동작 확인"
[Fact]
public void A_new_file_is_created_when_the_current_file_overflows() {
  var fileSystemMock = new Mock<IFileSystem>();
  fileSystemMock
    .Setup(x => x.GetFiles("audits"))
    .Returns(new string[] {
      @"audits\audit_1.txt",
      @"audits\audit_2.txt"
    });
  fileSystemMock
    .Setup(x => x.ReadAllLines(@"audits\audit_2.txt"))
    .Returns(new List<string> {
      "Peter; 2019-04-06T16:30:00",
      "Jane; 2019-04-06T16:40:00",
      "Jack; 2019-04-06T17:00:00",
    });

  var sut = new AuditManager(3, "audits", fileSystemMock.Object);

  sut.AddRecord("Alice", DateTime.Pars("2019-04-06T18:00:00"));

  fileSystemMock.verify(x => x.WriteAllText(
    @"audits\audit_3.txt"
    "Alice; 2019-04-06T18:00:00",
  ));
}
```

이 구현은 초기 버전보다 개선됐다. 테스트는 더 이상 파일 시스템에 접근하지 않으므로 더 빨리 실행된다. 테스트를 만족시키려고 파일 시스템을 다룰 필요가 없으므로 유지비도 절감된다. 리팩터링을 해도 회귀 방지와 리팩터링 내성이 나빠지지 않았다.   
하지만 더 개선할 수 있다. 목 라이브러리가 최선을 다해 도움을 주지만, 작성된 테스트는 여전히 평이한 입출력에 의존하는 테스트만큼 읽기가 쉽지 않다.

### 🎈 함수형 아키텍처로 리팩터링하기
인터페이스 뒤로 부작용을 숨기고 해당 인터페이스를 `AuditManager`에 주입하는 대신, 부작용을 클래스 외부로 완전히 이동할 수 있다. 그러면 `AuditManager`는 파일에 수행할 작업을 둘러싼 결정만 책임지게 된다. 새로운 클래스인 `Persister`는 그 결정에 따라 파일 시스템에 업데이트를 적용한다.
