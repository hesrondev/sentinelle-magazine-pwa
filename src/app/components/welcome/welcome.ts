import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

/**
 * Generated class for the WelcomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomeComponent {

  constructor(public modalCtrl: ModalController) {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
