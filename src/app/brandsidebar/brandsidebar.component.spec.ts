import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsidebarComponent } from './brandsidebar.component';

describe('BrandsidebarComponent', () => {
  let component: BrandsidebarComponent;
  let fixture: ComponentFixture<BrandsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
