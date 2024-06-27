import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsondarkheadingsComponent } from './withactionsondarkheadings.component';

describe('WithactionsondarkheadingsComponent', () => {
  let component: WithactionsondarkheadingsComponent;
  let fixture: ComponentFixture<WithactionsondarkheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsondarkheadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsondarkheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
