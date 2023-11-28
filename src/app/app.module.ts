import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgClass } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChapterComponent } from './components/chapter/chapter.component';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
 
@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent, ChapterComponent, PagenotfoundComponent],
  imports: [
    BrowserModule, 
    NgClass,
    AppRoutingModule, 
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MarkdownModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}