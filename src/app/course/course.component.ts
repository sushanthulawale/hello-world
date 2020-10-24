import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  
  form= new FormGroup({
     topics: new FormArray([])
  });  

  addTopic(topic: HTMLInputElement)
  {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }
  removeTopic(topic: FormControl)
  {
    let index=this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics()
  {
    return this.form.get('topics') as FormArray;
  }
}
