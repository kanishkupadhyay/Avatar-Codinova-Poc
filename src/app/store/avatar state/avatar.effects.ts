import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {  LoadAvatarListSuccess, ActionTypes } from './avatar.action';
import { DesignService } from '../../service/design.service';

@Injectable()

export class AvatarEffects {

    constructor(private actions$: Actions, private designService: DesignService) { }

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.loadAvatarList),
            mergeMap(() => {
                return this.designService.getAvatarList().pipe(
                    map(avatarList => new LoadAvatarListSuccess(avatarList))
                )
            }))
    })

}