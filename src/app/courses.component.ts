import { Component } from '@angular/core'
import { CoursesService} from './course/courses.service';


@Component({
    selector: 'courses',
    template: `
    <div>
    <button class="btn btn-primary" (click)=onClick() [style.backgroundColor]="isActive ? 'grey': 'white'">Save</button>
    </div><br/>
    <div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
    </div><br/>
    
    {{text | summary :10}}        
    `
})
export class CoursesComponent {
    title= "3 Authors";
   
    isActive=true;
    email = "me@abc.com";
    text =`abcdefghijklmnopqrstuvwxyz.`
   
    onClick()
    {
        window.alert("Hello. Saved");       
    }
    
    onKeyUp()
    {
       window.alert(this.email);
    }   
    // constructor(service: CoursesService)
    // {
    //     this.courses=service.getCourses();
        
    // }
   
}