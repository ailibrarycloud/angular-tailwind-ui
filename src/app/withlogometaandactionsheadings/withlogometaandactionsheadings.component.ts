import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-withlogometaandactionsheadings',
  templateUrl: './withlogometaandactionsheadings.component.html',
  animations: [ 
    trigger('AnimationTrigger0', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class WithlogometaandactionsheadingsComponent {
  
  isMenu = false;
  constructor() { }
  
  toggleMenu(){
    this.isMenu = !this.isMenu;
  }
}