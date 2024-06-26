import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdescriptionComponent } from './withdescription.component';

describe('WithdescriptionComponent', () => {
  let component: WithdescriptionComponent;
  let fixture: ComponentFixture<WithdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
