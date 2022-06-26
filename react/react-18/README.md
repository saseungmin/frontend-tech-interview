### 🎈 React 18 변경점

#### `useId`
`useId`는 클라이언트와 서버간의 hydration의 mismatch를 피하면서 유니크한 아이디를 생성할 수 있는 새로운 hook입니다. 이는 주로 고유한 `id`가 필요한 접근성 API와 사용되는 컴포넌트에 유용할 것으로 기대됩니다.   

아이디는 기본적으로 트리 내부의 노드의 위치를 나타내는 base 32 문자열입니다. 트리가 여러 children으로 분기될 때마다, 현재 레벨에서 자식 수준을 나타내는 비트를 시퀸스 왼쪽에 추가하게 됩니다,.   

`useId`는 목록에서 키를 생성하기 위한 것이 아닙니다. 키는 데이터에서 생성되어야 합니다.   

#### `useTransition`

이 두 메소드를 사용하면 일부 상태 업데이트를 긴급하지 않은 것(not urgent)로 표시할 수 있습니다. 이것으로 표시되지 않은 상태 업데이트는 긴급한 것으로 간주됩니다. 긴급한 상태 업데이트가 긴급하지 않은 상태 업데이트을 중단할 수 있습니다.   

상태 업데이트를 긴급한 것과 긴급하지 않은 것으로 나누어 개발자에게 렌더링 성능을 튜닝하는데 많은 자유를 주었다고 볼 수 있습니다.

```tsx
function App() {
  const [resource, setResource] = useState(initialResource)
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 })
  return (
    <>
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(resource.userId)
            setResource(fetchProfileData(nextUserId))
          })
        }}
      >
        Next
      </button>
      {isPending ? 'Loading...' : null} 
      <ProfilePage resource={resource} />
    </>
  )
}
```

- `startTransition`는 함수로, 리액트에 어떤 상태변화를 지연시키고 싶은지 지정할 수 있습니다.
- `isPending`은 진행 여부로, 트랜지션이 진행중인지 알 수 있습니다.
- `timeoutMs` 프로퍼티는 트랜지션이 완료될 때까지 얼마나 오랫동안 기다릴 것인지 결정합니다. `{timeoutMs: 3000}` 를 전달한다면 “다음 프로필을 불러오는 데 3초보다 오래 걸린다면 로딩 상태를 보여주고 그전까진 계속 이전 화면을 보여줘도 괜찮아”라는 의미입니다.

`useTransition` 같은 API를 사용하면 원하는 사용자 경험에 초점을 맞출 수 있고 어떻게 구현했는지 생각하지 않아도 됩니다.


```jsx
const initialResource = fetchUserAndPosts();

function ProfilePage() {
  const [resource, setResource] = useState(initialResource);

  function handleRefreshClick() {
    setResource(fetchUserAndPosts());
  }

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <button onClick={handleRefreshClick}>
        Refresh
      </button>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  );
}
```

이 예시에선 페이지가 로드되거나 “Refresh” 버튼을 누를 때 마다 데이터를 가져옵니다.   
`fetchUserAndPosts()`의 반환값을 상태에 저장하여 하위 컴포넌트들이 요청에서 가져온 데이터를 읽을 수 있게 하겠습니다.   
`<ProfileDetails>` 및 `<ProfileTimeline>` 컴포넌트는 새로운 데이터를 나타내는 새로운 리소스 prop을 수신하고 아직 응답이 없기 때문에 "suspend"되고 fallback이 표시됩니다.   
하지만 위 경험은 자연스럽지 않습니다. 우리는 한 페이지를 브라우징하고 있었는데 버튼을 클릭한 직후에 바로 로딩 상태로 전환되어 사용자를 혼란스럽게 합니다. 이전처럼, **의도치 않은 로딩 상태를 숨기기 위해서 상태 갱신을 트랜지션에 래핑할 수 있습니다.**   

```jsx
function ProfilePage() {
  const [isPending, startTransition] = useTransition({
    // Wait 10 seconds before fallback
    timeoutMs: 10000
  });
  const [resource, setResource] = useState(initialResource);

  function handleRefreshClick() {
    startTransition(() => {
      setResource(fetchProfileData());
    });
  }

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <button
        onClick={handleRefreshClick}
        disabled={isPending}
      >
        {isPending ? "Refreshing..." : "Refresh"}
      </button>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  );
}
```

“Refresh” 버튼을 클릭해도 우리가 브라우징하고 있는 페이지가 사라지지 않습니다. 우리는 인라인으로 뭔가 로딩되고 있다는 것을 보고 데이터가 준비된 이후에 새로운 데이터가 보입니다.   

이제 `useTransition`의 필요성이 매우 일반적이라는 걸 알 수 있습니다. 사용자가 상호작용하는 대상을 실수로 숨기지 않도록 컴포넌트를 서스펜드 상태로 만들 수 있는 대부분 버튼 클릭이나 상호작용은 `useTransition`으로 래핑해야 합니다.   

위 작업은 컴포넌트 사이에 많은 반복적인 코드 생산으로 이어질 수 있습니다. 이것이 일반적으로 디자인 시스템에 `useTransition` 사용하는 것을 추천하는 이유입니다. 예를 들어 트랜지션 로직을 커스텀 `<Button>` 컴포넌트로 추출할 수 있습니다.   

```jsx
function Button({ children, onClick }) {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 10000
  });

  function handleClick() {
    startTransition(() => {
      onClick();
    });
  }

  const spinner = (
    <span className="DelayedSpinner">
      {/* ... */}
    </span>
  );

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isPending}
      >
        {children}
      </button>
      {isPending ? spinner : null}
    </>
  );
}
```

명심하세요. 버튼은 어떤 상태를 갱신하던지 관여하지 않습니다. 이것은 `onClick` 이벤트 핸들러에서 발생하는 모든 상태 갱신을 `transition`에 포함합니다. 이제 `<Button>`이 트랜지션 설정을 대신해 주기 때문에 `<ProfilePage>` 컴포넌트에 트랜지션 설정을 해줄 필요가 없습니다.   

```jsx
function ProfilePage() {
  const [resource, setResource] = useState(initialResource);

  function handleRefreshClick() {
    setResource(fetchProfileData());
  }

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <Button onClick={handleRefreshClick}>
        Refresh
      </Button>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  );
}
```

버튼을 클릭하면 트랜지션이 시작되고 그 안에 `props.onClick()` 이 호출되서 `<ProfilePage>` 컴포넌트에서 `handleRefreshClick` 함수가 실행됩니다. 새로운 데이터를 가져오기 시작하지만 트랜지션 내부라서 폴백이 보여지지 않으며 `useTransition` 호출에 지정된 10초가 지나지 않았습니다. 트랜지션이 보류중인 동안 버튼에 인라인으로 로딩 인디케이터를 봅니다.   

이제 컨커런트 모드가 컴포넌트의 격리 수준 및 모듈성을 희생하지 않고도 우수한 사용자 경험을 만드는지 배웠습니다. React는 트랜지션을 조정합니다.

> https://reactjs.org/blog/2022/03/29/react-v18.html   
> https://yceffort.kr/2022/04/react-18-changelog   
> https://ko.reactjs.org/docs/concurrent-mode-patterns.html
