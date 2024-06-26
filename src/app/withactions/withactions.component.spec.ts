import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsComponent } from './withactions.component';

describe('WithactionsComponent', () => {
  let component: WithactionsComponent;
  let fixture: ComponentFixture<WithactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
