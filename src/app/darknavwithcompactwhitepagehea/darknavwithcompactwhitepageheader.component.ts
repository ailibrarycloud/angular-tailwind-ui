import { Component, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-darknavwithcompactwhitepageheader',
  templateUrl:'./darknavwithcompactwhitepageheader.component.html',
  animations: [ 
    trigger('opacityScale', [
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
export class DarknavwithcompactwhitepageheaComponent {
  
  isMenu = false;

  constructor() { }
  
  toggleMenu(){
    this.isMenu = !this.isMenu;
  }
}
@NgModule({
  declarations: [
    DarknavwithcompactwhitepageheaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }