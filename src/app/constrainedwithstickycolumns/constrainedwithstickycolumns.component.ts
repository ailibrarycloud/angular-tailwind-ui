import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-constrainedwithstickycolumns',
  templateUrl: './constrainedwithstickycolumns.component.html'
})
export class ConstrainedwithstickycolumnsComponent {
  
  constructor() { }
  
}
@NgModule({
  declarations: [
    ConstrainedwithstickycolumnsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }