import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

/**
 * 이것이 (state, action) => state 형태의 순수 함수인 리듀서입니다.
 * 리듀서는 액션이 어떻게 상태를 다음 상태로 변경하는지 서술합니다.
 *
 * 상태의 모양은 당신 마음대로입니다: 기본형(primitive)일수도, 배열일수도, 객체일수도,
 * 심지어 Immutable.js 자료구조일수도 있습니다.  오직 중요한 점은 상태 객체를 변경해서는 안되며,
 * 상태가 바뀐다면 새로운 객체를 반환해야 한다는 것입니다.
 *
 * 이 예제에서 우리는 `switch` 구문과 문자열을 썼지만,
 * 여러분의 프로젝트에 맞게
 * (함수 맵 같은) 다른 컨벤션을 따르셔도 좋습니다.
 */
export function counter(state = 0, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload
    default:
      return state
  }
}

export const countSelector = (state:number) => state;

export const incrementAction = (val:number)=>({
  type: 'INCREMENT',
  payload: val
})

export const decrementAction = (val:number)=>({
  type: 'DECREMENT',
  payload: val
})