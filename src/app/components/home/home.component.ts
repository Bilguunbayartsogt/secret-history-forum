import { Component, OnInit } from '@angular/core';
import { ChapterComponent } from '../chapter/chapter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{

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
