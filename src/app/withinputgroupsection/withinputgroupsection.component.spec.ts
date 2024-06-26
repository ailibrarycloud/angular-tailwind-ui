import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithinputgroupsectionComponent } from './withinputgroupsection.component';

describe('WithinputgroupsectionComponent', () => {
  let component: WithinputgroupsectionComponent;
  let fixture: ComponentFixture<WithinputgroupsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithinputgroupsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithinputgroupsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
