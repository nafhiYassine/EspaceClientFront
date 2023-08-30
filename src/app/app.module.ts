import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { AuthInterceptorService } from './Interceptors/auth-interceptor.service';
import { ResetPasswordComponent } from './pages/pages/auth/reset-password/reset-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SuccessSendComponent } from './pages/pages/auth/success-send/success-send.component';
import { DecimalTransformerPipe } from './pages/apps/home/home-guides/cotisations/decimal-transformer.pipe';

@NgModule({
  declarations: [AppComponent, ResetPasswordComponent, SuccessSendComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    VexModule,
    CustomLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
