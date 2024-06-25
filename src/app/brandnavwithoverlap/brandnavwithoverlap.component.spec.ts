import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandnavwithoverlapComponent } from './brandnavwithoverlap.component';

describe('BrandnavwithoverlapComponent', () => {
  let component: BrandnavwithoverlapComponent;
  let fixture: ComponentFixture<BrandnavwithoverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandnavwithoverlapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandnavwithoverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
