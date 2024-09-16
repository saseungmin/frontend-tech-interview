# 👉 TypeScript

## 🥕 [타입과 인터페이스의 차이점](https://saseungmin.github.io/reading_books_record_repository/docs/typescript/effective-typescript/chapter-2#-%EC%95%84%EC%9D%B4%ED%85%9C-13-%ED%83%80%EC%9E%85%EA%B3%BC-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%95%8C%EA%B8%B0)
타입스크립트에서 명명된 타입을 정의하는 방법은 두 가지가 있습니다.

```ts
type TState = {
  name: string;
  capital: string;
}

interface IState {
  name: string;
  capital: string;
}
```

타입과 인터페이스 사이에 존재하는 차이를 분명하게 알고, 같은 상황에서는 동일한 방법으로 명명된 타입을 정의해 일관성을 유지해야 합니다.   

#### 인터페이스 선언과 타입 선언의 비슷한 점
명명된 타입은 인터페이스로 정의하든 타입으로 정의하든 상태에는 차이가 없습니다. 만약 `IState`와 `TState`를 추가 속성과 함께 할당한다면 동일한 오류가 발생합니다.   

인덱스 시그니처는 인터페이스와 타입에서 모두 사용할 수 있습니다.

```ts
type TDict = {
  [key: string]: string
};

interface IDict {
  [key: string]: string;
}
```

또한 함수 타입도 인터페이스나 타입으로 정의할 수 있습니다.

```ts
type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = (x) => '' + x;
const toStrT: IFn = (x) => '' + x;
```

타입 별칭과 인터페이스는 모두 제너릭이 가능합니다.

```ts
type TPair<T> = {
  first: T;
  second: T;
}

interface IPair<T> {
  first: T;
  second: T;
}
```

인터페이스는 타입을 확장할 수 있으며, 타입은 인터페이스를 확장할 수 있습니다.

```ts
interface IStateWithPop extends TState {
  population: number;
}

type TStateWithPop = IState & { population: number; };
```

여기서 주의할 점은 인터페이스는 유니온 타입 같은 복잡한 타입을 확장하지 못한다는 것입니다. 복잡한 타입을 확장하고 싶다면 타입과 `&`를 사용해야 합니다.   
한편 클래스를 구현할 때는, 타입과 인터페이스 둘 다 사용할 수 있습니다.

```ts
class StateT implements TState {
  name: string = '';
  capital: string = '';
}

class StateI implements IState {
  name: string = '';
  capital: string = '';
}
```

#### 인터페이스 선언과 타입 선언의 다른 점
유니온 타입은 있지만 유니온 인터페이스라는 개념은 없습니다.

```ts
type AorB = 'a' | 'b';
```

인터페이스는 타입을 확장할 수 있지만, 유니온은 할 수 없습니다. 그런데 유니온 타입을 확장하는 게 필요할 때가 있습니다.

```ts
type Input = { /* ... */};
type Output = { /* ... */};
interface VariableMap {
  [name: string]: Input | Output;
}
```

또는 유니온 타입에 `name` 속성을 붙인 타입을 만들 수도 있습니다. 다음과 같습니다.

```ts
type NamedVariable = (Input | Output) & { name: string };
```

이 타입은 인터페이스로 표현할 수 없습니다. `type` 키워드는 일반적으로 `interface`보다 쓰임새가 많습니다. `type` 키워드는 유니온이 될 수도 있고, 매핑된 타입 또는 조건부 타입 같은 고급 기능에 활용되기도 합니다.   
튜플과 배열 타입도 `type` 키워드를 이용해 더 간결하게 표현할 수 있습니다.

```ts
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];
```

인터페이스로도 튜플과 비슷하게 구현할 수 있기는 합니다.

```ts
interface Tuple {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple = [10, 20]; // 정상
```

그러나 인터페이스로 튜플과 비슷하게 구현하면 튜플에서 사용할 수 있는 `concat` 같은 메서드들을 사용할 수 없습니다. 그러므로 튜플은 `type` 키워드로 구현하는 것이 낫습니다.   

반면 인터페이스는 타입에 없는 몇 가지 기능이 있습니다. 그중 하나로 바로 **보강**(**augment**)이 가능하다는 것입니다. 이번 아이템 처음에 등장했던 `State` 예제에 `population` 필드를 추가할 때 보강 기법을 사용할 수 있습니다.

```ts
interface IState {
  name: string;
  capital: string;
}

interface IState {
  population: number;
}

const wyoming: IState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000
}; // 정상
```

이 예제처럼 속성을 확장하는 것을 **선언 병합**(**declaration merging**)이라고 합니다. 선언 병합은 주로 타입 선언 파일에서 사용됩니다. 따라서 타입 선언 파일을 작성할 때는 선언 병합을 지원하기 위해 반드시 인터페이스를 사용해야 하며 표준을 따라야 합니다. 타입 선언에는 사용자가 채워야 하는 빈틈이 있을 수 있는데, 바로 이 선언 병합이 그렇습니다.   

병합은 선언처럼 일반적인 코드라서 언제든지 가능하다는 것을 알고 있어야합니다. 그러므로 프로퍼티가 추가되는 것을 원하지 않는다면 인터페이스 대신 타입을 사용해야 합니다.   

#### 정리

이번 아이템의 처음 질문으로 돌아가 타입과 인터페이스 중 어느 것을 사용해야 할지 결론을 내려 보겠습니다. 복잡한 타입이라면 고민할 것도 없이 타입 별칭을 사용하면 됩니다. 그러나 타입과 인터페이스, 두 가지 방법으로 모두 표현할 수 있는 간단한 객체 타입이라면 **일관성과 보강의 관점**에서 고려해 보야 합니다. 알관되게 인터페이스를 사용하는 코드베이스에서 작업하고 있다면 인터페이스를 사용하고, 일관되게 타입을 사용 중이라면 타입을 사용하면 됩니다.   
아직 스타일이 확립되지 않은 프로젝트라면, 향우에 보강의 가능성이 있을지 생각해 봐야 합니다. 어떤 API에 대한 타입 선언을 작성해야 한다면 인터페이스를 사용하는 게 좋습니다. API가 변경될 때 사용자가 인터페이스를 통해 새로운 필드를 병합할 수 있어 유용하기 때문입니다. 그러나 프로젝트 내부적으로 사용되는 타입에 선언 병합이 발생하는 것은 잘못된 설계입니다. 따라서 이럴 때는 타입을 사용해야 합니다.

## 🥕 열거형(enum) 사용을 지양해야하는 이유
타입스크립트가 태동하던 2010년경, 자바스크립트는 결함이 많고 개선해야 할 부분이 많은 언어였습니다. 그리고 클래스, 데코레이터, 모듈 시스템 같은 기능이 없어서 프레임워크나 트랜스파일러로 보완하는 것이 일반적인 모습이었습니다. 그렇기 떄문에 타입스크립트도 초기 버전에는 독립적으로 개발한 클래스, 열거형(enum), 모듈 시스템을 포함시킬 수밖에 없었습니다.   

시간이 흐르며 TC39(자바스크립트를 관장하는 표준 기구)는 부족했던 점들을 대부분 내장 기능으로 추가했습니다. 그러나 자바스크립트에 새로 추가된 기능은 타입스크립트 초기 버전에서 독립적으로 개발했던 기능과 호환성 문제를 발생시켰습니다. 그렇기에 타입스크립트 진영에서는 다음 전략 중 하나를 선택해야 했습니다. 한 가지 전략은 타입스크립트 초기 버전의 형태를 유지하기 위해 자바스크립트 신규 기능을 변형해서 끼워 맞추는 것입니다. 또 다른 전략은 자바스크립트의 신규 기능을 그대로 채택하고 타입스크립트 초기 버전과 호환성을 포기하는 것입니다.   

타입스크립트 팀은 대부분 두 번쨰 전략을 선택했습니다. 결국 TC39는 런타임 기능을 발전시키고, 타입스크립트 팀은 타입 기능만 발전시킨다는 명확한 원칙을 세우고 현재까지 지켜오고 있습니다.   

그런데 이 원칙이 세워지기 전에, 이미 사용되고 있던 몇 가지 기능이 있습니다. 이 기능들은 타입 공간(타입스크립트)과 값 공간(자바스크립트)의 경계를 혼란스럽게 만들기 때문에 사용하지 않는 것이 좋습니다. 여기서는 피해야 하는 기능을 몇 가지 살펴봅니다. 그리고 불가피하게 이 기능을 사용하게 되는 경우 어떤 점에 유의해야 호환성 문제를 일으키지 않는지 알아봅니다.

#### 열거형(enum)
많은 언어에서 몇몇 값의 모음을 나타내기 위해 열거형을 사용합니다. 타입스크립트에서도 열거형을 사용할 수 있습니다.

```ts
enum Flavor {
  VANILLA = 0,
  CHOCOLATE = 1,
  STRAWBERRY = 2,
}

let flavor = Flavor.CHOCOLATE; // 타입이 Flavor

Flavor // 자동완성 추천: VANILLA, CHOCOLATE, STRAWBERRY
Flavor[0] // 값이 "VANILLA"
```

단순히 값을 나열하는 것보다 실수가 적고 명확하기 때문에 일반적으로 열거형을 사용하는 것이 좋습니다. 그러나 타입스크립트의 열거형은 몇 가지 문제가 있습니다. 타입스크립트의 열거형은 다음 목록처럼 상황에 따라 다르게 동작합니다.
- 숫자 열거형(앞 예제의 `Flavor`)에 0, 1, 2 외의 다른 숫자가 할당되면 매우 위험합니다. (이 방법은 원래 비트 플래그 구조를 표현하기 위해 설계되었습니다.)
- 상수 열거형은 보통의 열거형과 달리 런타임에 완전히 제거됩니다. 앞의 예제를 `const enum Flavor`로 바꾸면, 컴파일러는 `Flavor.CHOCOLATE`을 `1`으로 바꿔 버립니다. 이런 결과는 기대하지 않은 것이며, 문자열 열거형과 숫자 열거형과 전혀 다른 동작입니다.
- `preserveConstEnums` 플래그를 설정한 상태의 상수 열거형은 보통의 열거형처럼 런타임 코드에 상수 열거형 정보를 유지합니다.
- 문자열 열거형은 런타임의 타입 안전성과 투명성을 제공합니다. 그러나 타입스크립트의 다른 타입과 달리 구조적 타이핑이 아닌 명목적 타이핑을 사용합니다.

타입스크립트의 일반적인 타입들이 할당 가능성을 체크하기 위해서 구조적 타이핑을 사용하는 반면, 문자열 열거형은 명목적 타이핑을 사용합니다.

> 구조적 타이핑은 구조가 같으면 할당이 허용되는 반면, 명목적 타이핑은 타입의 이름이 같아야 할당이 허용됩니다.

```ts
enum Flavor {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
}

let flavor = Flavor.CHOCOLATE; // 타입이 Flavor
    flavor = 'strawberry';
  // ~~~~~ '"strawberry"' 형식은 'Flavor' 형식에 할당할 수 없습니다.ts(2322)
```

명목적 타이핑은 라이브러리를 공개할 때 필요합니다. `Flavor`를 매개변수로 받는 함수를 가정해 봅시다.

```ts
function scoop(flavor: Flavor) { /* ... */ }
```

`Flavor`는 런타임 시점에는 문자열이기 떄문에, 자바스크립트에서 다음처럼 호추할 수 있습니다.

```ts
scoop('vanilla'); // 자바스크립트에서는 정상
```

그러나 타입스크립트에서는 열거형을 임포트하고 문자열 대신 사용해야 합니다.

```ts
import { Flavor } from 'ice-cream';
scoop(Flavor.VANILLA);
```

이처럼 자바스크립트와 타입스크립트에서 동작이 다르기 때문에 문자열 열거형은 사용하지 않는 것이 좋습니다. 열거형 대신 리터럴 타입의 유니온을 사용하면 됩니다.

```ts
type Flavor = 'vanilla' | 'chocolate' | 'strawberry';

let flavor: Flavor = 'chocolate'; // 정상
```

리터럴 타입의 유니온은 열거형만큼 안전하며 자바스크립트와 호환되는 장점이 있습니다. 그리고 편집기에서 열거형처럼 자동완성 기능을 사용할 수 있습니다.

## 🥕 [`any`와 `unknown`의 차이](https://xionwcfm.tistory.com/394)
`unknown` 타입은 `any` 타입 외의 어떤 타입에도 할당할 수 없다는 것입니다. 반면 `any`는 `never`를 제외한 모든것에 할당 가능합니다.

```ts
// error: boolean 타입에는 unknown 타입을 할당할 수 없음.
let unknownType: unknown;
let booleanType: boolean = unknownType;

// 반대로 unknown 타입에 boolean 타입을 할당하는 건 가능.
let boolType: boolean = true;
let unknownType: unknown = boolType;
```

`unknown` 타입에는 어떤 것을 대입하는 것이 유효하지 않기 때문에 `any` 타입보다 더욱 안전합니다.   
`unknown` 타입은 프로퍼티에 접근, 메소드 호출, 인스턴스 생성을 할 수 없습니다.   

```ts
// any는 string이라는 보장이 아니여도 호출 가능.
let anyValue: any;
anyValue.toUpperCase();

// error: unknown은 불가능.
let unknownValue: unknown;
unknownValue.toUpperCase();
```

이를 해결하기 위해서는 `unknown` 타입을 `string`으로 좁혀주어야합니다.

```ts
const unknownArgFunction = (value: unknown) => {
  if (typeof value === 'string') {
    // string으로 타입을 좁혀준 뒤 메서드를 호출.
    value.toUpperCase();
  }
}
```

타입스크립트를 사용하다보면 들어오게 될 인자의 타입을 예측할 수 없는 경우가 있는데, `any` 타입을 사용할때에는 휴먼에러를 발생하시 쉽지만, `unknown` 타입은 항상 타입을 먼저 확인 한 후에 무언가를 시도할 수 있기 때문에 `any` 타입보다 더욱 안전합니다.   
