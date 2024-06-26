import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithavatarandactionsComponent } from './withavatarandactions.component';

describe('WithavatarandactionsComponent', () => {
  let component: WithavatarandactionsComponent;
  let fixture: ComponentFixture<WithavatarandactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithavatarandactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithavatarandactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
