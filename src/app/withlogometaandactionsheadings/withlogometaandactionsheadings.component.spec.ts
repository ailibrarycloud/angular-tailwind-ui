import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithlogometaandactionsheadingsComponent } from './withlogometaandactionsheadings.component';

describe('WithlogometaandactionsheadingsComponent', () => {
  let component: WithlogometaandactionsheadingsComponent;
  let fixture: ComponentFixture<WithlogometaandactionsheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithlogometaandactionsheadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithlogometaandactionsheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
