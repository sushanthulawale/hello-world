import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'Angular hello-world';
 title: string;
 isFavorite: boolean;
 tweet={
   body: '...',
   likesCount: 10,
   isLiked: false
 };

 courses=[{id: 1, name: 'course1'},
          {id: 2, name: 'course2'},
          {id: 3, name: 'course3'}
 ];
 viewMode = 'map';
 onClick(){
  //  if(this.isFavorite)
   this.isFavorite=!this.isFavorite;  
}
onAdd()
{
    this.courses.push({id: 4, name: 'course4'});
}
onRemove(course)
{
    let index=this.courses.indexOf(course);
    this.courses.splice(index, 1);
}
}
