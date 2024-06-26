import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsectionComponent } from './withactionsection.component';

describe('WithactionsectionComponent', () => {
  let component: WithactionsectionComponent;
  let fixture: ComponentFixture<WithactionsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
