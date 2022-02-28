import { avatarReducer } from "./avatar state/avatar.reducer";
import { AvatarState } from "./avatar state/avatar.store";

export interface AppState {
    avatar:AvatarState
}

export const appReducer = {
    avatar:avatarReducer
}