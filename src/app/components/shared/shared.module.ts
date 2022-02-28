import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { AllItemComponent } from './all-item/all-item.component';
import { EffectsModule } from '@ngrx/effects';
import { AvatarEffects } from 'src/app/store/avatar state/avatar.effects';

@NgModule({
  declarations: [
    AvatarComponent,
    AllItemComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forRoot([AvatarEffects]),
  ],
  exports: [
    AvatarComponent,
    AllItemComponent
  ]
})
export class SharedModule { }
