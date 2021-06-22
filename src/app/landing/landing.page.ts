import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { WelcomeComponent } from '../components/welcome/welcome';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  selectedIndex: number;
  joinForm: FormGroup;

  constructor(public toastCtrl: ToastController,
    private fb: FormBuilder,
    public modalCtrl: ModalController,
    public contactSrv: ContactService) {
    this.selectedIndex = 0;
    this.createForm();
  }

  ngOnInit() {

  }

  checkValidity(label: string) {
    return this.joinForm.controls[label].invalid &&
      (this.joinForm.controls[label].dirty || this.joinForm.controls[label].touched);
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

    this.contactSrv.sendJoinInfo(this.joinForm.value).subscribe((res: any) => {
      this.joinForm.reset();
      this.presentModal();
    }, error => {
      this.presentToast(false);
    });
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
      color: success ? 'success' : 'warning',
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
