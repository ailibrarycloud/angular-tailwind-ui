import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithavatarandactionsheadingsComponent } from './withavatarandactionsheadings.component';

describe('WithavatarandactionsheadingsComponent', () => {
  let component: WithavatarandactionsheadingsComponent;
  let fixture: ComponentFixture<WithavatarandactionsheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithavatarandactionsheadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithavatarandactionsheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
