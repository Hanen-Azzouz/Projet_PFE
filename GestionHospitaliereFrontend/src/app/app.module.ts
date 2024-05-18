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

@NgModule({
  declarations: [
    AppComponent,
    AlltemplateBackComponent,
    FooterBackComponent,
    HeaderBackComponent,
    SideBarBackComponent
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
