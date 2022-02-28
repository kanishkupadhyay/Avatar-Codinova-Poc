import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export type AvatarRadius = 'none' | 'round' | 'semi';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent implements OnChanges {

  @Input() public imageUrl: string = '';
  @Input() public headline: string = '';
  @Input() public tagline: string = '';
  @Input() public subtext: string = '';
  @Input() public avatarRadius: AvatarRadius = 'round';
   name = 'kanishk';

  public imageUrlExists: boolean = false;

  public onErrorInImage(): void {
    this.imageUrlExists = true
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageUrl']) {
      this.imageUrl = changes['imageUrl'].currentValue
    }
    if (changes['avatarRadius']) {
      this.avatarRadius = changes['avatarRadius'].currentValue
    }
  }

}
