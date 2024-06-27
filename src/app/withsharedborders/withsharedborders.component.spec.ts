import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithsharedbordersComponent } from './withsharedborders.component';

describe('WithsharedbordersComponent', () => {
  let component: WithsharedbordersComponent;
  let fixture: ComponentFixture<WithsharedbordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithsharedbordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithsharedbordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
