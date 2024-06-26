import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tworownavigationwithoverlap',
  templateUrl:'./tworownavigationwithoverlap.component.html',
  animations: [ 
    trigger('opacityScaleLeave', [
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ]),
    trigger('opacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('opacityScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('150ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class TworownavigationwithoverlapComponent {
  
  isMenu = false;
  isMobileMenu = false;
  
  toggleMenu(){
    this.isMenu = !this.isMenu;
  }

  toggleMobileMenu(){
    this.isMobileMenu = !this.isMobileMenu;
  }
}