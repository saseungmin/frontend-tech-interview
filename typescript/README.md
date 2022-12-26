## 👉 TypeScript

### 🥕 [타입과 인터페이스의 차이점](https://saseungmin.github.io/reading_books_record_repository/docs/typescript/effective-typescript/chapter-1#-%EC%95%84%EC%9D%B4%ED%85%9C-3-%EC%BD%94%EB%93%9C-%EC%83%9D%EC%84%B1%EA%B3%BC-%ED%83%80%EC%9E%85%EC%9D%B4-%EA%B4%80%EA%B3%84%EC%97%86%EC%9D%8C%EC%9D%84-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
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
