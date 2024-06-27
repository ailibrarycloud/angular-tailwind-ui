import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithlabelsectionComponent } from './withlabelsection.component';

describe('WithlabelsectionComponent', () => {
  let component: WithlabelsectionComponent;
  let fixture: ComponentFixture<WithlabelsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithlabelsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithlabelsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
