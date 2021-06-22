import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { ComponentsModule } from '../components/components.module';
import { WelcomeComponent } from '../components/welcome/welcome';
import { HttpClientModule } from '@angular/common/http';
import { InputTrimModule } from 'ng2-trim-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule,
    InputTrimModule
  ],
  declarations: [
    LandingPage
  ],
  entryComponents: [
    WelcomeComponent
  ],
})
export class LandingPageModule {}
