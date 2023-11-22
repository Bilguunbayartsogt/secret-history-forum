import { Component } from '@angular/core';
import { titles } from 'src/data/chapters';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  titles = titles;
}
