import { Component, Input } from '@angular/core';

/**
 * Generated class for the SocialIconsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-social-icons',
  templateUrl: 'social-icons.html',
  styleUrls: ['social-icons.scss'],
})
export class SocialIconsComponent {


  @Input()
  orientation: string;

  constructor() {
    this.orientation = 'horizontal';
  }


}
