import { Component, Input } from '@angular/core';
import { titles } from 'src/data/chapters';
import { ChapterComponent } from 'src/app/components/chapter/chapter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  titles = titles;

  @Input() isSidebarHidden?: Boolean;
}
