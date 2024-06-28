import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-constrainedthreecolumn',
  templateUrl: './constrainedthreecolumn.component.html',
})
export class ConstrainedthreecolumnComponent {
  
  constructor() { }
  
}

@NgModule({
  declarations: [
    ConstrainedthreecolumnComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }