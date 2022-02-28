import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { LoadAvatarList } from '../../../store/avatar state/avatar.action';
import { getAvatarList } from '../../../store/avatar state/avatar.selector';

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.scss']
})
export class AllItemComponent implements OnInit{

  public $avatarList: Observable<any> = this.store.select(getAvatarList);

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.store.dispatch(new LoadAvatarList())
  }
}
