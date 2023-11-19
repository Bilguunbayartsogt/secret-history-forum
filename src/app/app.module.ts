import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';

@NgModule({
	declarations: [AppComponent, HomeComponent, PostsComponent],
	imports: [
		BrowserModule, 
		AppRoutingModule, 
		AngularFireModule.initializeApp(environment.firebaseConfig),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }