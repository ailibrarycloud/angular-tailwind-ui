import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithinlinetabssectionComponent } from './withinlinetabssection.component';

describe('WithinlinetabssectionComponent', () => {
  let component: WithinlinetabssectionComponent;
  let fixture: ComponentFixture<WithinlinetabssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithinlinetabssectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithinlinetabssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
