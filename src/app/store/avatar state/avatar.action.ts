
import { Action} from '@ngrx/store';
import { AvatarState } from './avatar.store';
export enum  ActionTypes {
    loadAvatarList = 'loadAvatarList',
    loadAvatarListSuccess = 'loadAvatarListSuccess'
}

export class LoadAvatarList implements Action{
    readonly type = ActionTypes.loadAvatarList;
  }

  export class LoadAvatarListSuccess implements Action{
    readonly type = ActionTypes.loadAvatarListSuccess;
    constructor(public payload:AvatarState){}
  }