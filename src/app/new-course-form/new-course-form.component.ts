import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  courseDetail=[
    {id:'1', name:'Development'},
    {id:'2', name:'Arts'},
    {id:'3', name:'Language'},
  ];  
 contactDetail=[
   {id:'1', name:'Email'},
   {id:'2', name:'Phone'}
 ]
  sub: string;
  abc: string;
  submit(f){   
    debugger; 
    console.log(f);    
    this.sub=f.value.isSubscribed ? 'Yes' : 'No';      
    window.alert("Name: " + f.value.courseName + " & " + "Category :" + f.value.courseDetail.name + " & " + "Subscribed: " + this.sub);
  }
}
