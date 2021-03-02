import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'datedemo',
  templateUrl: './datedemo.component.html',
  styleUrls: ['./datedemo.component.scss']
})
export class DatedemoComponent {
  today;  
  degree=null;
  constructor() {
    this.showdate();
  }
  form= new FormGroup({
    topics: new FormArray([])
 });  

  showdate(){
    this.today = new Date();
    return this.today;
  }
  
  convertTemp(){
    console.log(this.degree);
  
  }
  

  
}
