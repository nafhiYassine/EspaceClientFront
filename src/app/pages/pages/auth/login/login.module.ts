import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CaptchaComponent } from '../forgot-password/captcha/captcha.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from './../../../../../../src/environments/environment';
import { ForgotPasswordModule } from '../forgot-password/forgot-password.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    ForgotPasswordModule

    ],
  providers: [
    {
        provide: RECAPTCHA_SETTINGS,
        useValue: {
          siteKey: environment.recaptcha.siteKey,
        } as RecaptchaSettings,
      },
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class LoginModule {
}
