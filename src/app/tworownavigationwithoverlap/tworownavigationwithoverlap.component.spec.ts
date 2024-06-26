import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TworownavigationwithoverlapComponent } from './tworownavigationwithoverlap.component';

describe('TworownavigationwithoverlapComponent', () => {
  let component: TworownavigationwithoverlapComponent;
  let fixture: ComponentFixture<TworownavigationwithoverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TworownavigationwithoverlapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TworownavigationwithoverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
