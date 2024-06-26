import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsidebarwithheaderComponent } from './brandsidebarwithheader.component';

describe('BrandsidebarwithheaderComponent', () => {
  let component: BrandsidebarwithheaderComponent;
  let fixture: ComponentFixture<BrandsidebarwithheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsidebarwithheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandsidebarwithheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
