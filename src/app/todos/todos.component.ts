import { bounceOutLeftAnimation, fadeInAnimation, fadeOutAnimation } from './../animations';
import { Component } from '@angular/core';
import { fade, slide } from '../animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group } from '@angular/animations';


@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    //fade
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform : 'translateY(-20px)'}),
            animate(500)
          ]),
          query('@todoAnimation', animateChild())
        ])
        ])
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red'}),
        // animate(800),
        // useAnimation(bounceOutLeftAnimation)
        useAnimation(fadeOutAnimation, {
          params: {
            duration: '500ms'
          }
        }),
        useAnimation(bounceOutLeftAnimation)
    ])
    ])
  ]
})

export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance',
    'Go home on holidays',
    'Work on your terms'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event)
  {
    console.log($event);
  }
  animationDone($event)
  {
    console.log($event);
  }
}
