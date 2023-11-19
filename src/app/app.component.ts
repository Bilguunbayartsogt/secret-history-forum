import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


@Component({	
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

	constructor(private firestore: AngularFirestore) {
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
