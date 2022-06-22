### 🥕 Resetting과 Normalizing CSS의 차이점은 무엇인가요?
`Resetting`은 요소의 모든 기본 브라우저 스타일을 제거하기 위한 것입니다.   
`Normalizing`은 모든 스타일을 제거하는 것이 아니라 유용한 기본 스타일을 보존합니다. 또한 일반적인 브라우저 종속성에 대한 버그를 수정하빈다.

### 🥕 `* { box-sizing: border-box; }`는 무엇을 하나요? 장점은 무엇인가요?
이 요소는 `width`와 `height`가 어떻게 계산되는지를 변경하여, `border`와 `padding`도 계산에 포함됩니다. `padding`과 `border`를 박스 모델의 일부분으로 생각하면, 디자이너가 실제로 생각하는 것과 잘 들어 맞습니다.
