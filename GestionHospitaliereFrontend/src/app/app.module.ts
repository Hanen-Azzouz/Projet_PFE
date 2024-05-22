import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlltemplateBackComponent } from './back-office/alltemplate-back/alltemplate-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { HeaderBackComponent } from './back-office/header-back/header-back.component';
import { SideBarBackComponent } from './back-office/side-bar-back/side-bar-back.component';
import { AlltemplateFrontComponent } from './front-office/alltemplate-front/alltemplate-front.component';
import { FooterFrontComponent } from './front-office/footer-front/footer-front.component';
import { HeaderFrontComponent } from './front-office/header-front/header-front.component';
import { HomeComponent } from './front-office-pages/home/home.component';
import { LoginComponent } from './Users Components/Components/login/login.component';
import { AddUserComponent } from './Users Components/Components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AlltemplateBackComponent,
    FooterBackComponent,
    HeaderBackComponent,
    SideBarBackComponent,
    AlltemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
