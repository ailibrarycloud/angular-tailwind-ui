import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardwithavatarandstatsheadingsComponent } from './cardwithavatarandstatsheadings.component';

describe('CardwithavatarandstatsheadingsComponent', () => {
  let component: CardwithavatarandstatsheadingsComponent;
  let fixture: ComponentFixture<CardwithavatarandstatsheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardwithavatarandstatsheadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardwithavatarandstatsheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
