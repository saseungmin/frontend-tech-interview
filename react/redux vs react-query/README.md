## 🤔 Topic: SWR 또는 React Query와 같은 라이브러리가 나타나게 된 배경 및 원인

### 🎈 [Why I Stopped Using Redux](https://dev.to/g_abud/why-i-quit-redux-1knl)

#### The Problem with Single Page Applications
데이터를 비동기식으로 가져오는 것은 이제 데이터가 프런트엔드와 백엔드의 두 위치에 있어야 한다는 것을 의미했습니다.   
네트워크 대기 시간을 줄이기 위해 데이터 캐시를 유지하면서 모든 구성 요소에서 사용할 수 있도록 해당 데이터를 전역적으로 저장하는 최선의 방법을 생각해야 합니다.   
프론트엔드 개발의 큰 부분은 이제 state bugs, [데이터 비정규화](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape#normalizing-state-shape) 및 오래된 데이터로 고통받지 않고 글로벌 store를 유지하는 방법에 대한 부담이 됩니다. (A big part of frontend development now becomes burdened with how to maintain our global store without suffering from state bugs, data denormalization, and stale data.)

#### Redux is not a Cache
Redux 및 유사한 상태 관리 라이브러리를 사용할 때 우리 대부분이 겪는 주요 문제는 백엔드 상태에 대한 캐시로 취급한다는 것입니다. 우리는 데이터를 가져오고, reducer/action을 사용하여 스토어에 추가하고, 최신 상태인지 확인하기 위해 주기적으로 다시 가져옵니다. 우리는 Redux가 너무 많은 일을 하도록 만들고 이를 우리 문제에 대한 포괄적인 솔루션으로 사용하고 있습니다.   

기억해야 할 한 가지 중요한 점은 프론트엔드와 백엔드 상태가 결코 실제로 동기화되지 않는다는 것입니다. 기껏해야 그들이 있는 신기루(mirage)를 만들 수 있습니다. 이것은 클라이언트-서버 모델 의 단점 중 하나이며 처음에 캐시가 필요한 이유입니다. 그러나 동기화 상태를 캐싱하고 유지하는 것은 매우 복잡하므로 Redux가 권장하는 것처럼 이 백엔드 상태를 처음부터 다시 생성해서는 안 됩니다.

프론트엔드에서 데이터베이스를 재생성하기 시작하면 백엔드와 프론트엔드 책임 간의 경계가 빠르게 흐려집니다. 프론트엔드 개발자로서 우리는 간단한 UI를 만들기 위해 [Relationships and Tables](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape#relationships-and-tables) 대한 완전한 지식을 가질 필요가 없습니다 . 또한 [데이터를 정규화하는 최적의 방법](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape#normalizing-nested-data)을 알 필요가 없습니다. 그 책임은 테이블을 직접 디자인하는 사람들, 즉 백엔드 개발자에게 있습니다. 그러면 백엔드 개발자는 문서화된 API 형태로 프론트엔드 개발자에게 추상화를 제공할 수 있습니다.   

프론트엔드 코드에서 백엔드 상태 관리를 중단하고 대신 주기적으로 업데이트해야 하는 캐시처럼 취급하면 어떻게 될까요? 프론트엔드를 캐시에서 읽는 단순한 디스플레이 레이어처럼 취급함으로써 우리의 코드는 작업하기가 훨씬 더 쉬워지고 순수한 프론트엔드 개발자가 더 쉽게 액세스할 수 있습니다.

#### 🎈 A Simpler Approach to Backend State
1. React Query
2. SWR
3. Apollo Client

참고: [Comparison | React Query vs SWR vs Apollo vs RTK Query](https://react-query.tanstack.com/comparison)


### 🎈 How and Why You Should Use React Query
React로 애플리케이션을 구축할 때 직면하는 문제 중 하나는 서버에서 데이터를 가져오기 위한 코드 패턴을 결정하는 것입니다. React에서 데이터 가져오기를 처리하는 가장 일반적인 방법은 global state를 가져오기 작업의 현재 상태를 결정하는 메커니즘으로 사용하는 것입니다.   

다음은 Star Wars API에서 데이터를 가져오는 예입니다.

```jsx
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// regular fetch with axios
function App() {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [data, setData] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
  
      try {
        const response = await axios('http://swapi.dev/api/people/1/');
  
        setData(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData()
  }, []);
return (
    <div className="App">
      <h1>React Query example with Star Wars API</h1>
      {isError && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
export default App;
```

위의 코드는 데이터를 저장하고 애플리케이션이 데이터를 fetching하고 있는지와 이미 API에서 오류 응답을 받았는지, 데이터를 저장하는 세 가지의 다른 state가 필요하고 `useState`와 `useEffect` hooks 둘다 필요합니다.   

그뿐만이 아니라, React에서 데이터 fetching과 관련된 가장 일반적인 문제는 다음과 같습니다.   
1. 데이터는 모든 앱 인스턴스에서 공유되며 다른 사람이 변경할 수 있습니다.(Data is shared across all app instance and can be changed by other people.)
2. 데이터가 "stale"일 수 있으며 새로 고쳐야 합니다. (Data could be “stale” and needs to be refreshed.)
3. 요청 작업을 최적화하기 위해 데이터 캐싱 및 데이터 무효화 처리 (Handle caching and invalidating data to optimize the request operation.)

마지막으로, API에서 가져온 데이터를 보유하는 remote state와 결합된 *테마* 및 *사이드바* 구성과 같은 사용자의 기본 설정을 일반적으로 저장하는 local state를 갖는 문제도 있습니다. (Finally, there is also the problem of having the local state which commonly stores your user’s preferences like theme and sidebar config coupled with the remote state which holds the data fetched from API)

```js
//what global state commonly look like nowadays
const state = {
  // local state
  theme: "light",
  sidebar: "off",
  // remote state
  followers: [],
  following: [],
  userProfile: {},
  messages:[],
  todos:[],
}
```

local state와 remote state를 분리할 수 있다면 좋지 않을까요? data fetching위해 작성해야 하는 boilerplate 코드의 양을 줄일 수 있다면 어떨까요?   

One solution would be to create your own custom hook to handle fetching and handling of data. That’s a completely valid solution.   

Another solution and one that we’ll be exploring here in-depth is [React Query](https://react-query.tanstack.com/). 이 라이브러리는 두 개의 간단한 Hooks와 하나의 유틸리티 기능을 제공하여 작성해야 하는 코드의 양을 줄이는 동시에 remote data를 가져오고(fetch), 동기화하고(synchronize), 업데이트하고(update), 캐시하는(cache) 데 도움이 줍니다.   

For example, let’s refactor the Star Wars API example above:

```js
import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
// react-query fetch with axios
function App() {
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
  axios('http://swapi.dev/api/people/1/'))
return (
    <div className="App">
      <h1>React Query example with star wars API</h1>
      {error && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Retrieving Luke Skywalker Information ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
export default App;
```

#### Conclusion
React Query는 remote data를 global state에 넣을 필요를 완전히 없애주는 데이터 요청 관리를 위한 훌륭한 hook 라이브러리입니다. **데이터를 가져와야 하는 위치를 라이브러리에 알려 주기만 ​​하면** 추가 코드나 구성 없이 캐싱, 백그라운드 업데이트 및 오래된 데이터를 처리합니다. (You just need to tell the library where you need to fetch your data, and it will handle caching, background updates, and stale data without any extra code or configuration.)   

또한 React Query는 `useState`및 `useEffect` hooks의 필요성을 제거하고 몇 줄의 React Query 로직으로 대체합니다.

### 🎈 [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state)
- React Query는 서버와 클라이언트 간의 비동기 작업을 관리 하는 Server-State 라이브러리입니다.
- Redux, MobX, Zusstand 등은 *비동기 데이터를 저장하는 데 사용할 수 있는* Client-State 라이브러리이지만 *React Query와 같은 도구와 비교할 때 비효율적*입니다.   

이러한 점을 염두에 두고 짧은 대답은 React Query가 Client-State의 캐시 데이터를 관리하는 데 사용되는 보일러플레이트 코드 및 관련 wiring 캐시 데이터를 몇 줄의 코드로 대체한다는 것입니다.

> 응용 프로그램이 실제로 엄청난 양의 동기 클라이언트 전용 상태(예: 비주얼 디자이너 또는 음악 제작 응용 프로그램)를 가질 수 있는 상황이 여전히 있으며, 이 경우 여전히 Client-State 관리자가 필요할 것입니다. 이 상황에서 **React Query는 local/Client State 관리를 대체하지 않는다는 점에 유의하는 것이 중요합니다.** 그러나 문제가 없는 대부분의 클라이언트 상태 관리자와 함께 React Query를 사용할 수 있습니다.
### 🎈 [리덕스 잘 쓰고 계시나요?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)

#### API요청은 이제 react-query, SWR에게 맡기자
리덕스로 요청에 관련된 상태를 관리하려면 요청 시작, 요청 성공, 요청 실패에 대한 3가지 액션들을 준비해야 하고 해당 액션들을 처리하는 로직들도 준비해줘야 한다. (ex. `getEpisode`, `getEpisodeSuccess`, `getEpisodeError`)   

2020년에는 react-query와 SWR 라는 라이브러리들이 릴리즈되었다. 두 라이브러리 모두, Hook을 사용하여 API 요청 상태를 관리하고, 또 캐시 관리도 아주 멋지게 해낸다.   

SWR은 Next.js를 만든 Vercel팀에서 만든 것이기에 서버사이드 렌더링을 하는 경우 Next.js 와 함께 사용해야한다 (적어도 공식 문서에서는 해당 내용만 다룬다.).   

#### 그럼에도 리덕스 미들웨어는 필요할까?
특정 기능들은 미들웨어의 힘을 빌렸을 때 더욱 쉽게 개발 할 수 있다. 웹에선 redux-saga, 모바일 앱에서는 redux-observable을 사용할 때 다음과 같은 상황에 유용하게 사용할 수 있다.   

첫번째 상황은 **요청을 연달아서 여러번 하게 될 때 이전 요청은 무시하도록 하고 맨 마지막의 요청만 처리하도록 할 때** 로 이러한 상황엔 redux-saga 에선 `takeLatest`, redux-observable 에선 `switchMap` 을 사용하면 아주 쉽게 마지막 요청에 대한 응답만 처리하도록 구현을 할 수 있다.   

두번째 상황은 첫번째 상황와 꽤나 비슷한건데 **특정 조건이 만족됐을 때 이전에 시작한 요청을 취소하는 상황**이다.   

세번째 상황은 **특정 콜백함수를 원하는 액션이 디스패치 됐을 때 호출하도록 등록을 하는 상황**이다.   

네번째 상황은 **컴포넌트 밖에서 어떤 작업을 수행할 때** 이다.   

### 🎈 [React Query 살펴보기](https://maxkim-j.github.io/posts/react-query-preview)

#### React Query가 만들어진 동기
React 자체가 데이터를 패칭해오거나 업데이트 하는 옵션을 제공하지 않기 때문에 원래 React 개발자들은 각자의 방식으로 http 통신 로직을 짜야 했다.   

Redux 같은 전역 상태관리 라이브러리들이 클라이언트 상태값에 대해서는 잘 작동하지만, 서버 상태에 대해서는 그렇게 잘 작동하지 않는다. Server State는 Client State와 완전 다르기 때문이다.
  - 서버 데이터는 항상 최신 상태임을 보장하지 않는다. 명시적으로 fetching을 수행해야만 최신 데이터로 전환된다.
  - 네트워크 통신은 최소한으로 줄이는게 좋은데, 복수의 컴포넌트에서 최신 데이터를 받아오기 위해 fetching을 여러번 수행하는 낭비가 발생할 수 있다.

#### 좋아보이는 점
- 비동기 관련한 타이핑이 정말 많이 줄어든다
- Redux같은 전역 상태 저장소의 store에 동기적으로 업데이트되는 데이터와 액션만 남길 수 있어 크기를 줄이고, Saga는 아예 대체해버린다.
- 캐싱과 리패칭을 개발자가 구현하지 않아도 알아서 지원한다.
- 풍부한 옵션을 제공해 굉장히 많은 부분에서 custom이 가능하다.

### 📌 참고 링크
- [리덕스 잘 쓰고 계시나요?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
- [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state)
- [How and Why You Should Use React Query](https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d)
- [React Query 살펴보기](https://maxkim-j.github.io/posts/react-query-preview)
- [React Query로 서버 상태 관리하기](https://blog.rhostem.com/posts/2021-02-01T00:00:00.000Z)
- [Why I Stopped Using Redux](https://dev.to/g_abud/why-i-quit-redux-1knl)
- [CAP 정리](https://ko.wikipedia.org/wiki/CAP_%EC%A0%95%EB%A6%AC)