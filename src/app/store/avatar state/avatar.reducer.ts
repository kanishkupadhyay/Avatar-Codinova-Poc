import { createReducer, on } from '@ngrx/store';
import { ActionTypes } from './avatar.action';
import { avatarState } from './avatar.store'

// const _avatarReducer = createReducer(avatarState,
//   switch()
//   on(ActionTypes.loadAvatarListSuccess, (state, action) => {
//     return {
//       ...state,
//       avatarList: action.avatarList
//     }
//   })
// )

const  _avatarReducer = (state:any = avatarState,action:any) => {
  switch (action.type) {
    case ActionTypes.loadAvatarListSuccess: {
      return {
              ...state,
              avatarList: action.payload
            }
    }

    default: {
      return state
    }
}
}

export function avatarReducer(state: any, action: any) {
  return _avatarReducer(state, action);
}