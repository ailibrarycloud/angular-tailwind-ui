import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithbadgeanddropdownsectionComponent } from './withbadgeanddropdownsection.component';

describe('WithbadgeanddropdownsectionComponent', () => {
  let component: WithbadgeanddropdownsectionComponent;
  let fixture: ComponentFixture<WithbadgeanddropdownsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithbadgeanddropdownsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithbadgeanddropdownsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
