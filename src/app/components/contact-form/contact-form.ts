import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

/**
 * Generated class for the ContactFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: 'contact-form.html',
  styleUrls: ['contact-form.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup;

  constructor(public toastCtrl: ToastController, private fb: FormBuilder) {
    this.createForm();
  }

  /**
   * Create contact form with builder
   */
  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  /**
   * Send info to server
   */
  sendContactForm() {
    this.contactForm.reset();
    this.presentToast();
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
}
