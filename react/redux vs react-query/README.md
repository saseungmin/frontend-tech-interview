## π€ Topic: SWR λλ React Queryμ κ°μ λΌμ΄λΈλ¬λ¦¬κ° λνλκ² λ λ°°κ²½ λ° μμΈ

### π [Why I Stopped Using Redux](https://dev.to/g_abud/why-i-quit-redux-1knl)

#### The Problem with Single Page Applications
λ°μ΄ν°λ₯Ό λΉλκΈ°μμΌλ‘ κ°μ Έμ€λ κ²μ μ΄μ  λ°μ΄ν°κ° νλ°νΈμλμ λ°±μλμ λ μμΉμ μμ΄μΌ νλ€λ κ²μ μλ―Ένμ΅λλ€.   
λ€νΈμν¬ λκΈ° μκ°μ μ€μ΄κΈ° μν΄ λ°μ΄ν° μΊμλ₯Ό μ μ§νλ©΄μ λͺ¨λ  κ΅¬μ± μμμμ μ¬μ©ν  μ μλλ‘ ν΄λΉ λ°μ΄ν°λ₯Ό μ μ­μ μΌλ‘ μ μ₯νλ μ΅μ μ λ°©λ²μ μκ°ν΄μΌ ν©λλ€.   
νλ‘ νΈμλ κ°λ°μ ν° λΆλΆμ μ΄μ  state bugs, [λ°μ΄ν° λΉμ κ·ν](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape#normalizing-state-shape) λ° μ€λλ λ°μ΄ν°λ‘ κ³ ν΅λ°μ§ μκ³  κΈλ‘λ² storeλ₯Ό μ μ§νλ λ°©λ²μ λν λΆλ΄μ΄ λ©λλ€. (A big part of frontend development now becomes burdened with how to maintain our global store without suffering from state bugs, data denormalization, and stale data.)

#### Redux is not a Cache
Redux λ° μ μ¬ν μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©ν  λ μ°λ¦¬ λλΆλΆμ΄ κ²ͺλ μ£Όμ λ¬Έμ λ λ°±μλ μνμ λν μΊμλ‘ μ·¨κΈνλ€λ κ²μλλ€. μ°λ¦¬λ λ°μ΄ν°λ₯Ό κ°μ Έμ€κ³ , reducer/actionμ μ¬μ©νμ¬ μ€ν μ΄μ μΆκ°νκ³ , μ΅μ  μνμΈμ§ νμΈνκΈ° μν΄ μ£ΌκΈ°μ μΌλ‘ λ€μ κ°μ Έμ΅λλ€. μ°λ¦¬λ Reduxκ° λλ¬΄ λ§μ μΌμ νλλ‘ λ§λ€κ³  μ΄λ₯Ό μ°λ¦¬ λ¬Έμ μ λν ν¬κ΄μ μΈ μλ£¨μμΌλ‘ μ¬μ©νκ³  μμ΅λλ€.   

κΈ°μ΅ν΄μΌ ν  ν κ°μ§ μ€μν μ μ νλ‘ νΈμλμ λ°±μλ μνκ° κ²°μ½ μ€μ λ‘ λκΈ°νλμ§ μλλ€λ κ²μλλ€. κΈ°κ»ν΄μΌ κ·Έλ€μ΄ μλ μ κΈ°λ£¨(mirage)λ₯Ό λ§λ€ μ μμ΅λλ€. μ΄κ²μ ν΄λΌμ΄μΈνΈ-μλ² λͺ¨λΈ μ λ¨μ  μ€ νλμ΄λ©° μ²μμ μΊμκ° νμν μ΄μ μλλ€. κ·Έλ¬λ λκΈ°ν μνλ₯Ό μΊμ±νκ³  μ μ§νλ κ²μ λ§€μ° λ³΅μ‘νλ―λ‘ Reduxκ° κΆμ₯νλ κ²μ²λΌ μ΄ λ°±μλ μνλ₯Ό μ²μλΆν° λ€μ μμ±ν΄μλ μ λ©λλ€.

νλ‘ νΈμλμμ λ°μ΄ν°λ² μ΄μ€λ₯Ό μ¬μμ±νκΈ° μμνλ©΄ λ°±μλμ νλ‘ νΈμλ μ±μ κ°μ κ²½κ³κ° λΉ λ₯΄κ² νλ €μ§λλ€. νλ‘ νΈμλ κ°λ°μλ‘μ μ°λ¦¬λ κ°λ¨ν UIλ₯Ό λ§λ€κΈ° μν΄ [Relationships and Tables](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape#relationships-and-tables) λν μμ ν μ§μμ κ°μ§ νμκ° μμ΅λλ€ . λν [λ°μ΄ν°λ₯Ό μ κ·ννλ μ΅μ μ λ°©λ²](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape#normalizing-nested-data)μ μ νμκ° μμ΅λλ€. κ·Έ μ±μμ νμ΄λΈμ μ§μ  λμμΈνλ μ¬λλ€, μ¦ λ°±μλ κ°λ°μμκ² μμ΅λλ€. κ·Έλ¬λ©΄ λ°±μλ κ°λ°μλ λ¬Έμνλ API ννλ‘ νλ‘ νΈμλ κ°λ°μμκ² μΆμνλ₯Ό μ κ³΅ν  μ μμ΅λλ€.   

νλ‘ νΈμλ μ½λμμ λ°±μλ μν κ΄λ¦¬λ₯Ό μ€λ¨νκ³  λμ  μ£ΌκΈ°μ μΌλ‘ μλ°μ΄νΈν΄μΌ νλ μΊμμ²λΌ μ·¨κΈνλ©΄ μ΄λ»κ² λ κΉμ? νλ‘ νΈμλλ₯Ό μΊμμμ μ½λ λ¨μν λμ€νλ μ΄ λ μ΄μ΄μ²λΌ μ·¨κΈν¨μΌλ‘μ¨ μ°λ¦¬μ μ½λλ μμνκΈ°κ° ν¨μ¬ λ μ¬μμ§κ³  μμν νλ‘ νΈμλ κ°λ°μκ° λ μ½κ² μ‘μΈμ€ν  μ μμ΅λλ€.

#### π A Simpler Approach to Backend State
1. React Query
2. SWR
3. Apollo Client

μ°Έκ³ : [Comparison | React Query vs SWR vs Apollo vs RTK Query](https://react-query.tanstack.com/comparison)


### π How and Why You Should Use React Query
Reactλ‘ μ νλ¦¬μΌμ΄μμ κ΅¬μΆν  λ μ§λ©΄νλ λ¬Έμ  μ€ νλλ μλ²μμ λ°μ΄ν°λ₯Ό κ°μ Έμ€κΈ° μν μ½λ ν¨ν΄μ κ²°μ νλ κ²μλλ€. Reactμμ λ°μ΄ν° κ°μ Έμ€κΈ°λ₯Ό μ²λ¦¬νλ κ°μ₯ μΌλ°μ μΈ λ°©λ²μ global stateλ₯Ό κ°μ Έμ€κΈ° μμμ νμ¬ μνλ₯Ό κ²°μ νλ λ©μ»€λμ¦μΌλ‘ μ¬μ©νλ κ²μλλ€.   

λ€μμ Star Wars APIμμ λ°μ΄ν°λ₯Ό κ°μ Έμ€λ μμλλ€.

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

μμ μ½λλ λ°μ΄ν°λ₯Ό μ μ₯νκ³  μ νλ¦¬μΌμ΄μμ΄ λ°μ΄ν°λ₯Ό fetchingνκ³  μλμ§μ μ΄λ―Έ APIμμ μ€λ₯ μλ΅μ λ°μλμ§, λ°μ΄ν°λ₯Ό μ μ₯νλ μΈ κ°μ§μ λ€λ₯Έ stateκ° νμνκ³  `useState`μ `useEffect` hooks λλ€ νμν©λλ€.   

κ·ΈλΏλ§μ΄ μλλΌ, Reactμμ λ°μ΄ν° fetchingκ³Ό κ΄λ ¨λ κ°μ₯ μΌλ°μ μΈ λ¬Έμ λ λ€μκ³Ό κ°μ΅λλ€.   
1. λ°μ΄ν°λ λͺ¨λ  μ± μΈμ€ν΄μ€μμ κ³΅μ λλ©° λ€λ₯Έ μ¬λμ΄ λ³κ²½ν  μ μμ΅λλ€.(Data is shared across all app instance and can be changed by other people.)
2. λ°μ΄ν°κ° "stale"μΌ μ μμΌλ©° μλ‘ κ³ μ³μΌ ν©λλ€. (Data could be βstaleβ and needs to be refreshed.)
3. μμ²­ μμμ μ΅μ ννκΈ° μν΄ λ°μ΄ν° μΊμ± λ° λ°μ΄ν° λ¬΄ν¨ν μ²λ¦¬ (Handle caching and invalidating data to optimize the request operation.)

λ§μ§λ§μΌλ‘, APIμμ κ°μ Έμ¨ λ°μ΄ν°λ₯Ό λ³΄μ νλ remote stateμ κ²°ν©λ *νλ§* λ° *μ¬μ΄λλ°* κ΅¬μ±κ³Ό κ°μ μ¬μ©μμ κΈ°λ³Έ μ€μ μ μΌλ°μ μΌλ‘ μ μ₯νλ local stateλ₯Ό κ°λ λ¬Έμ λ μμ΅λλ€. (Finally, there is also the problem of having the local state which commonly stores your userβs preferences like theme and sidebar config coupled with the remote state which holds the data fetched from API)

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

local stateμ remote stateλ₯Ό λΆλ¦¬ν  μ μλ€λ©΄ μ’μ§ μμκΉμ? data fetchingμν΄ μμ±ν΄μΌ νλ boilerplate μ½λμ μμ μ€μΌ μ μλ€λ©΄ μ΄λ¨κΉμ?   

One solution would be to create your own custom hook to handle fetching and handling of data. Thatβs a completely valid solution.   

Another solution and one that weβll be exploring here in-depth is [React Query](https://react-query.tanstack.com/). μ΄ λΌμ΄λΈλ¬λ¦¬λ λ κ°μ κ°λ¨ν Hooksμ νλμ μ νΈλ¦¬ν° κΈ°λ₯μ μ κ³΅νμ¬ μμ±ν΄μΌ νλ μ½λμ μμ μ€μ΄λ λμμ remote dataλ₯Ό κ°μ Έμ€κ³ (fetch), λκΈ°ννκ³ (synchronize), μλ°μ΄νΈνκ³ (update), μΊμνλ(cache) λ° λμμ΄ μ€λλ€.   

For example, letβs refactor the Star Wars API example above:

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
React Queryλ remote dataλ₯Ό global stateμ λ£μ νμλ₯Ό μμ ν μμ μ£Όλ λ°μ΄ν° μμ²­ κ΄λ¦¬λ₯Ό μν νλ₯­ν hook λΌμ΄λΈλ¬λ¦¬μλλ€. **λ°μ΄ν°λ₯Ό κ°μ ΈμμΌ νλ μμΉλ₯Ό λΌμ΄λΈλ¬λ¦¬μ μλ € μ£ΌκΈ°λ§ ββνλ©΄** μΆκ° μ½λλ κ΅¬μ± μμ΄ μΊμ±, λ°±κ·ΈλΌμ΄λ μλ°μ΄νΈ λ° μ€λλ λ°μ΄ν°λ₯Ό μ²λ¦¬ν©λλ€. (You just need to tell the library where you need to fetch your data, and it will handle caching, background updates, and stale data without any extra code or configuration.)   

λν React Queryλ `useState`λ° `useEffect` hooksμ νμμ±μ μ κ±°νκ³  λͺ μ€μ React Query λ‘μ§μΌλ‘ λμ²΄ν©λλ€.

### π [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state)
- React Queryλ μλ²μ ν΄λΌμ΄μΈνΈ κ°μ λΉλκΈ° μμμ κ΄λ¦¬ νλ Server-State λΌμ΄λΈλ¬λ¦¬μλλ€.
- Redux, MobX, Zusstand λ±μ *λΉλκΈ° λ°μ΄ν°λ₯Ό μ μ₯νλ λ° μ¬μ©ν  μ μλ* Client-State λΌμ΄λΈλ¬λ¦¬μ΄μ§λ§ *React Queryμ κ°μ λκ΅¬μ λΉκ΅ν  λ λΉν¨μ¨μ *μλλ€.   

μ΄λ¬ν μ μ μΌλμ λκ³  μ§§μ λλ΅μ React Queryκ° Client-Stateμ μΊμ λ°μ΄ν°λ₯Ό κ΄λ¦¬νλ λ° μ¬μ©λλ λ³΄μΌλ¬νλ μ΄νΈ μ½λ λ° κ΄λ ¨ wiring μΊμ λ°μ΄ν°λ₯Ό λͺ μ€μ μ½λλ‘ λμ²΄νλ€λ κ²μλλ€.

> μμ© νλ‘κ·Έλ¨μ΄ μ€μ λ‘ μμ²­λ μμ λκΈ° ν΄λΌμ΄μΈνΈ μ μ© μν(μ: λΉμ£ΌμΌ λμμ΄λ λλ μμ μ μ μμ© νλ‘κ·Έλ¨)λ₯Ό κ°μ§ μ μλ μν©μ΄ μ¬μ ν μμΌλ©°, μ΄ κ²½μ° μ¬μ ν Client-State κ΄λ¦¬μκ° νμν  κ²μλλ€. μ΄ μν©μμ **React Queryλ local/Client State κ΄λ¦¬λ₯Ό λμ²΄νμ§ μλλ€λ μ μ μ μνλ κ²μ΄ μ€μν©λλ€.** κ·Έλ¬λ λ¬Έμ κ° μλ λλΆλΆμ ν΄λΌμ΄μΈνΈ μν κ΄λ¦¬μμ ν¨κ» React Queryλ₯Ό μ¬μ©ν  μ μμ΅λλ€.
### π [λ¦¬λμ€ μ μ°κ³  κ³μλμ?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)

#### APIμμ²­μ μ΄μ  react-query, SWRμκ² λ§‘κΈ°μ
λ¦¬λμ€λ‘ μμ²­μ κ΄λ ¨λ μνλ₯Ό κ΄λ¦¬νλ €λ©΄ μμ²­ μμ, μμ²­ μ±κ³΅, μμ²­ μ€ν¨μ λν 3κ°μ§ μ‘μλ€μ μ€λΉν΄μΌ νκ³  ν΄λΉ μ‘μλ€μ μ²λ¦¬νλ λ‘μ§λ€λ μ€λΉν΄μ€μΌ νλ€. (ex. `getEpisode`, `getEpisodeSuccess`, `getEpisodeError`)   

2020λμλ react-queryμ SWR λΌλ λΌμ΄λΈλ¬λ¦¬λ€μ΄ λ¦΄λ¦¬μ¦λμλ€. λ λΌμ΄λΈλ¬λ¦¬ λͺ¨λ, Hookμ μ¬μ©νμ¬ API μμ²­ μνλ₯Ό κ΄λ¦¬νκ³ , λ μΊμ κ΄λ¦¬λ μμ£Ό λ©μ§κ² ν΄λΈλ€.   

SWRμ Next.jsλ₯Ό λ§λ  Vercelνμμ λ§λ  κ²μ΄κΈ°μ μλ²μ¬μ΄λ λ λλ§μ νλ κ²½μ° Next.js μ ν¨κ» μ¬μ©ν΄μΌνλ€ (μ μ΄λ κ³΅μ λ¬Έμμμλ ν΄λΉ λ΄μ©λ§ λ€λ£¬λ€.).   

#### κ·ΈλΌμλ λ¦¬λμ€ λ―Έλ€μ¨μ΄λ νμν κΉ?
νΉμ  κΈ°λ₯λ€μ λ―Έλ€μ¨μ΄μ νμ λΉλ Έμ λ λμ± μ½κ² κ°λ° ν  μ μλ€. μΉμμ  redux-saga, λͺ¨λ°μΌ μ±μμλ redux-observableμ μ¬μ©ν  λ λ€μκ³Ό κ°μ μν©μ μ μ©νκ² μ¬μ©ν  μ μλ€.   

μ²«λ²μ§Έ μν©μ **μμ²­μ μ°λ¬μμ μ¬λ¬λ² νκ² λ  λ μ΄μ  μμ²­μ λ¬΄μνλλ‘ νκ³  λ§¨ λ§μ§λ§μ μμ²­λ§ μ²λ¦¬νλλ‘ ν  λ** λ‘ μ΄λ¬ν μν©μ redux-saga μμ  `takeLatest`, redux-observable μμ  `switchMap` μ μ¬μ©νλ©΄ μμ£Ό μ½κ² λ§μ§λ§ μμ²­μ λν μλ΅λ§ μ²λ¦¬νλλ‘ κ΅¬νμ ν  μ μλ€.   

λλ²μ§Έ μν©μ μ²«λ²μ§Έ μν©μ κ½€λ λΉμ·νκ±΄λ° **νΉμ  μ‘°κ±΄μ΄ λ§μ‘±λμ λ μ΄μ μ μμν μμ²­μ μ·¨μνλ μν©**μ΄λ€.   

μΈλ²μ§Έ μν©μ **νΉμ  μ½λ°±ν¨μλ₯Ό μνλ μ‘μμ΄ λμ€ν¨μΉ λμ λ νΈμΆνλλ‘ λ±λ‘μ νλ μν©**μ΄λ€.   

λ€λ²μ§Έ μν©μ **μ»΄ν¬λνΈ λ°μμ μ΄λ€ μμμ μνν  λ** μ΄λ€.   

### π [React Query μ΄ν΄λ³΄κΈ°](https://maxkim-j.github.io/posts/react-query-preview)

#### React Queryκ° λ§λ€μ΄μ§ λκΈ°
React μμ²΄κ° λ°μ΄ν°λ₯Ό ν¨μΉ­ν΄μ€κ±°λ μλ°μ΄νΈ νλ μ΅μμ μ κ³΅νμ§ μκΈ° λλ¬Έμ μλ React κ°λ°μλ€μ κ°μμ λ°©μμΌλ‘ http ν΅μ  λ‘μ§μ μ§μΌ νλ€.   

Redux κ°μ μ μ­ μνκ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬λ€μ΄ ν΄λΌμ΄μΈνΈ μνκ°μ λν΄μλ μ μλνμ§λ§, μλ² μνμ λν΄μλ κ·Έλ κ² μ μλνμ§ μλλ€. Server Stateλ Client Stateμ μμ  λ€λ₯΄κΈ° λλ¬Έμ΄λ€.
  - μλ² λ°μ΄ν°λ ν­μ μ΅μ  μνμμ λ³΄μ₯νμ§ μλλ€. λͺμμ μΌλ‘ fetchingμ μνν΄μΌλ§ μ΅μ  λ°μ΄ν°λ‘ μ νλλ€.
  - λ€νΈμν¬ ν΅μ μ μ΅μνμΌλ‘ μ€μ΄λκ² μ’μλ°, λ³΅μμ μ»΄ν¬λνΈμμ μ΅μ  λ°μ΄ν°λ₯Ό λ°μμ€κΈ° μν΄ fetchingμ μ¬λ¬λ² μννλ λ­λΉκ° λ°μν  μ μλ€.

#### μ’μλ³΄μ΄λ μ 
- λΉλκΈ° κ΄λ ¨ν νμ΄νμ΄ μ λ§ λ§μ΄ μ€μ΄λ λ€
- Reduxκ°μ μ μ­ μν μ μ₯μμ storeμ λκΈ°μ μΌλ‘ μλ°μ΄νΈλλ λ°μ΄ν°μ μ‘μλ§ λ¨κΈΈ μ μμ΄ ν¬κΈ°λ₯Ό μ€μ΄κ³ , Sagaλ μμ λμ²΄ν΄λ²λ¦°λ€.
- μΊμ±κ³Ό λ¦¬ν¨μΉ­μ κ°λ°μκ° κ΅¬ννμ§ μμλ μμμ μ§μνλ€.
- νλΆν μ΅μμ μ κ³΅ν΄ κ΅μ₯ν λ§μ λΆλΆμμ customμ΄ κ°λ₯νλ€.

### π μ°Έκ³  λ§ν¬
- [λ¦¬λμ€ μ μ°κ³  κ³μλμ?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
- [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state)
- [How and Why You Should Use React Query](https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d)
- [React Query μ΄ν΄λ³΄κΈ°](https://maxkim-j.github.io/posts/react-query-preview)
- [React Queryλ‘ μλ² μν κ΄λ¦¬νκΈ°](https://blog.rhostem.com/posts/2021-02-01T00:00:00.000Z)
- [Why I Stopped Using Redux](https://dev.to/g_abud/why-i-quit-redux-1knl)
- [CAP μ λ¦¬](https://ko.wikipedia.org/wiki/CAP_%EC%A0%95%EB%A6%AC)
