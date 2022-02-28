import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AvatarState } from './avatar.store';

const getAvatarListState = createFeatureSelector<AvatarState>('avatar');

export const getAvatarList = createSelector(getAvatarListState, (state: any) => {
    return state.avatarList
})