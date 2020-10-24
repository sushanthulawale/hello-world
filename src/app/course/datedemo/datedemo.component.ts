import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datedemo',
  templateUrl: './datedemo.component.html',
  styleUrls: ['./datedemo.component.scss']
})
export class DatedemoComponent implements OnInit {
  today;
    
  constructor() {
    this.showdate();
  }

  showdate(){
    this.today = new Date();
    return this.today;
  }
  
  ngOnInit(): void {
   
  }
  
}
