import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChapterComponent } from './components/chapter/chapter.component';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent, ChapterComponent],
  imports: [
    BrowserModule, 
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