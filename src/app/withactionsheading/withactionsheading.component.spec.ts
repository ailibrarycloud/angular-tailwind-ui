import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsheadingComponent } from './withactionsheading.component';

describe('WithactionsheadingComponent', () => {
  let component: WithactionsheadingComponent;
  let fixture: ComponentFixture<WithactionsheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsheadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
