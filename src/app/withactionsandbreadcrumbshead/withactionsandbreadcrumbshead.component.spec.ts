import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsandbreadcrumbsheadComponent } from './withactionsandbreadcrumbshead.component';

describe('WithactionsandbreadcrumbsheadComponent', () => {
  let component: WithactionsandbreadcrumbsheadComponent;
  let fixture: ComponentFixture<WithactionsandbreadcrumbsheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsandbreadcrumbsheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsandbreadcrumbsheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
