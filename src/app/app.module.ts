import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from "@angular/router";
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { applicationRoutes } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from '@angular/forms';
import { IntroductionComponent } from './introduction/introduction.component';
@NgModule({
  declarations: [
    
    MainComponent,
    
    HomeComponent,
    
    ContactComponent,
    
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
