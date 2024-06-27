import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsandtabssectionComponent } from './withactionsandtabssection.component';

describe('WithactionsandtabssectionComponent', () => {
  let component: WithactionsandtabssectionComponent;
  let fixture: ComponentFixture<WithactionsandtabssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsandtabssectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsandtabssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
