import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { AppService } from '../app.service';
import { chapters } from 'src/data/chapters';
import { NgClass } from '@angular/common';
import { ChaptersInterface } from '../chapters-interface';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chapters: ChaptersInterface[];
  chapter: ChaptersInterface;
  paragraphs = [];
  constructor(private service: AppService) {
    this.chapters = chapters;
    this.chapter = this.chapters[0];
  }

  // test() {
  // 	for (let i = 0; i < this.chapters.length; i++) {

  // 	}
  // }

  ngOnInit() {
    console.log(this.chapter.chapterParagraphs);
  }

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
