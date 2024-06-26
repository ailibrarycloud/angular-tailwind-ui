import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdescriptionandactionComponent } from './withdescriptionandaction.component';

describe('WithdescriptionandactionComponent', () => {
  let component: WithdescriptionandactionComponent;
  let fixture: ComponentFixture<WithdescriptionandactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdescriptionandactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdescriptionandactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
