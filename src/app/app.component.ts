import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';


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
	isDarkModeOn: Boolean = false;
	mydata: any; 

	onModeClick(): void {
		this.isDarkModeOn = !this.isDarkModeOn;
	}

	onUpClick() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onDownClick() {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth',
		});
	}
}
