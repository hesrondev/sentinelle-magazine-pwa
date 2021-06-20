import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { WelcomeComponent } from '../components/welcome/welcome';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  selectedIndex: number;
  joinForm: FormGroup;

  displayVideo = false;

  constructor(public toastCtrl: ToastController,
    private fb: FormBuilder,
    public modalCtrl: ModalController) {
    this.selectedIndex = 0;
    this.createForm();
  }

  ngOnInit() {
  }

  playVideo() {
    this.displayVideo = true;
  }


  /**
   * Create join community form with builder
   */
  createForm() {
    this.joinForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Send info to server
   */
  sendForm() {
    this.joinForm.reset();
    this.presentModal();
    // this.presentToast();
  }

  changeIndex(index: number) {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
    }
  }

  /**
   * Present confirmation toast
   */
  async presentToast(success: boolean = true) {
    const toast = await this.toastCtrl.create({
      message: success ? 'Your request has been sent' : 'An error has occured, please retry later.',
      duration: 2000
    });
    toast.present();
  }

  /**
   * Dislay Welcom modal
   */
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: WelcomeComponent,
      cssClass: 'landing-modal',
      swipeToClose: true
    });
    return await modal.present();
  }
}
