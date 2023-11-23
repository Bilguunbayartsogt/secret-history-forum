import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit{
  chapterNumber = -1;
  chapterPath = ''
  constructor(private route: ActivatedRoute, private router: Router) { 
    // this.chapterNumber = Number(this.route.snapshot.params['id']);
    // this.chapterPath = `../../../assets/chapter${this.chapterNumber}.md`;
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chapterNumber = Number(params.get('id'));
      this.chapterPath = `../../../assets/chapter${this.chapterNumber}.md`;

      // You can also add any other logic that needs to run when the parameter changes
    });
  }
}
