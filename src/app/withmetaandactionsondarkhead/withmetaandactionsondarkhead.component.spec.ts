import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithmetaandactionsondarkheadComponent } from './withmetaandactionsondarkhead.component';

describe('WithmetaandactionsondarkheadComponent', () => {
  let component: WithmetaandactionsondarkheadComponent;
  let fixture: ComponentFixture<WithmetaandactionsondarkheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithmetaandactionsondarkheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithmetaandactionsondarkheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
