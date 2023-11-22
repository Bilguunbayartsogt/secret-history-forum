import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './components/home/home.component';


@Component({	
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

	constructor() {
	}
	ngOnInit() {
		
	}
;

	title = 'Home';
}
