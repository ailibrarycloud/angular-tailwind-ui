import { BrandednavwithcompactwhitepageComponent } from './brandednavwithcompactwhitepageheader/brandednavwithcompactwhitepageheader.component';
import { Routes } from '@angular/router';
import { LightnavwithbottomborderComponent } from './lightnavwithbottomborder/lightnavwithbottomborder.component';
import { LightnavongraybackgroundComponent } from './lightnavongraybackground/lightnavongraybackground.component';
import { DarknavwithwhitepageheaderComponent } from './darknavwithwhitepageheader/darknavwithwhitepageheader.component';
import { DarknavwithoverlapComponent } from './darknavwithoverlap/darknavwithoverlap.component';
import { BrandnavwithoverlapComponent } from './brandnavwithoverlap/brandnavwithoverlap.component';
import { BrandednavwithwhitepageheaderComponent } from './brandednavwithwhitepageheader/brandednavwithwhitepageheader.component';
import { DarknavwithcompactwhitepageheaComponent } from './darknavwithcompactwhitepagehea/darknavwithcompactwhitepageheader.component';

export const routes: Routes = [
  {
    path: 'lightnavwithbottomborder-component',
    component: LightnavwithbottomborderComponent,
  },

  {
    path: 'lightnavongraybackground-component',
    component: LightnavongraybackgroundComponent,
  },

  {
    path: 'darknavwithwhitepageheader-component',
    component: DarknavwithwhitepageheaderComponent,
  },

  {
    path: 'brandednavwithcompactwhitepageheader-component',
    component: BrandednavwithcompactwhitepageComponent,
  },

  {
    path: 'darknavwithoverlap-component',
    component: DarknavwithoverlapComponent,
  },

  {
    path: 'brandnavwithoverlap-component',
    component: BrandnavwithoverlapComponent,
  },

  {
    path: 'brandednavwithwhitepageheader-component',
    component: BrandednavwithwhitepageheaderComponent,
  },

  {
    path: 'darknavwithcompactwhitepagehea-component',
    component: DarknavwithcompactwhitepageheaComponent,
  },

];
