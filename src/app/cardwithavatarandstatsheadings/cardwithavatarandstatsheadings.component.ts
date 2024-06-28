import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-cardwithavatarandstatsheadings',
  templateUrl: './cardwithavatarandstatsheadings.component.html'
})
export class CardwithavatarandstatsheadingsComponent {
  
  constructor() { }

}
@NgModule({
  declarations: [
    CardwithavatarandstatsheadingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }