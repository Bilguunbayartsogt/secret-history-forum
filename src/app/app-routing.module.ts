import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterComponent } from './components/chapter/chapter.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'chapter/:id', 
    component: ChapterComponent
  }, 
  {
    path: '**', 
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
