import { Component } from '@angular/core';
import { chapters } from 'src/data/chapters';
import { ChaptersInterface } from '../../chapters-interface';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {
  chapters: ChaptersInterface[];
  chapter: ChaptersInterface;
  paragraphs = [];

  constructor() {
    this.chapters = chapters;
    this.chapter = this.chapters[0];
  }
}
