import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SocialIconsComponent } from './social-icons/social-icons';
import { ContactFormComponent } from './contact-form/contact-form';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome';
import { CommonModule } from '@angular/common';
@NgModule({
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	declarations: [
		SocialIconsComponent,
		ContactFormComponent,
		WelcomeComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		ReactiveFormsModule
	],
	exports: [
		SocialIconsComponent,
		ContactFormComponent,
		WelcomeComponent
	],
	entryComponents: [
		WelcomeComponent
	]
})
export class ComponentsModule { }
