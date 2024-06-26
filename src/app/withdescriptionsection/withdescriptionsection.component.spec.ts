import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdescriptionsectionComponent } from './withdescriptionsection.component';

describe('WithdescriptionsectionComponent', () => {
  let component: WithdescriptionsectionComponent;
  let fixture: ComponentFixture<WithdescriptionsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdescriptionsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdescriptionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
