import { BrandednavwithcompactwhitepageComponent } from './brandednavwithcompactwhitepageheader/brandednavwithcompactwhitepageheader.component';
import { Routes } from '@angular/router';
import { LightnavwithbottomborderComponent } from './lightnavwithbottomborder/lightnavwithbottomborder.component';
import { LightnavongraybackgroundComponent } from './lightnavongraybackground/lightnavongraybackground.component';
import { DarknavwithwhitepageheaderComponent } from './darknavwithwhitepageheader/darknavwithwhitepageheader.component';
import { DarknavwithoverlapComponent } from './darknavwithoverlap/darknavwithoverlap.component';
import { BrandnavwithoverlapComponent } from './brandnavwithoverlap/brandnavwithoverlap.component';
import { BrandednavwithwhitepageheaderComponent } from './brandednavwithwhitepageheader/brandednavwithwhitepageheader.component';
import { DarknavwithcompactwhitepageheaComponent } from './darknavwithcompactwhitepagehea/darknavwithcompactwhitepageheader.component';
import { TworownavigationwithoverlapComponent } from './tworownavigationwithoverlap/tworownavigationwithoverlap.component';
import { BrandsidebarwithheaderComponent } from './brandsidebarwithheader/brandsidebarwithheader.component';
import { DarksidebarwithheaderComponent } from './darksidebarwithheader/darksidebarwithheader.component';
import { LightsidebarwithheaderComponent } from './lightsidebarwithheader/lightsidebarwithheader.component';
import { BrandsidebarComponent } from './brandsidebar/brandsidebar.component';
import { DarksidebarComponent } from './darksidebar/darksidebar.component';

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

  {
    path: 'tworownavigationwithoverlap-component',
    component: TworownavigationwithoverlapComponent,
  },

  {
    path: 'brandsidebarwithheader-component',
    component: BrandsidebarwithheaderComponent,
  },

  {
    path: 'darksidebarwithheader-component',
    component: DarksidebarwithheaderComponent,
  },

  {
    path: 'lightsidebarwithheader-component',
    component: LightsidebarwithheaderComponent,
  },

  {
    path: 'brandsidebar-component',
    component: BrandsidebarComponent,
  },
  {
    path: 'darksidebar-component',
    component: DarksidebarComponent,
  },
];
