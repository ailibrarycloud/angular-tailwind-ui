import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionsandbreadcrumbsondarComponent } from './withactionsandbreadcrumbsondar.component';

describe('WithactionsandbreadcrumbsondarComponent', () => {
  let component: WithactionsandbreadcrumbsondarComponent;
  let fixture: ComponentFixture<WithactionsandbreadcrumbsondarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionsandbreadcrumbsondarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionsandbreadcrumbsondarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
