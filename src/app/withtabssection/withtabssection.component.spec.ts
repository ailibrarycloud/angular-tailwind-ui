import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithtabssectionComponent } from './withtabssection.component';

describe('WithtabssectionComponent', () => {
  let component: WithtabssectionComponent;
  let fixture: ComponentFixture<WithtabssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithtabssectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithtabssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
