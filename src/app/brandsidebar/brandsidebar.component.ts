import { Component, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-brandsidebar',
  templateUrl: './brandsidebar.component.html',
  animations: [ 
    trigger('opacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease', style({ opacity: 0 }))
      ])
    ]),
    trigger('translateX', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({  transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('opacityInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BrandsidebarComponent {
  
  isOffCanvasMenu = false;
  isOffCanvasMenuDialog = false;

  constructor() { }
  
  toggleOffCanvasMenu(){
    this.isOffCanvasMenu = !this.isOffCanvasMenu;
    
    if (this.isOffCanvasMenuDialog){
      setTimeout(() => {
        this.isOffCanvasMenuDialog = !this.isOffCanvasMenuDialog;
      },400)
    } else {
      this.isOffCanvasMenuDialog = !this.isOffCanvasMenuDialog;
    }
  }
}
@NgModule({
  declarations: [
    BrandsidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }