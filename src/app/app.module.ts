import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { FlagComponent } from './flag/flag.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import { AuthSvgComponent } from './auth-svg/auth-svg.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    FlagComponent,
    DashboardComponent,
    AuthComponent,
    LoginFormComponent,
    SingUpFormComponent,
    AuthSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
