import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

import { environment } from './environments/environment';

@NgModule({
	declarations: [AppComponent, HomeComponent, PostsComponent],
	imports: [
		BrowserModule, 
		AppRoutingModule, 
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }