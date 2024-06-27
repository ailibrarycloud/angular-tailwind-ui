import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithmetaactionsandbreadcrumbshComponent } from './withmetaactionsandbreadcrumbsh.component';

describe('WithmetaactionsandbreadcrumbshComponent', () => {
  let component: WithmetaactionsandbreadcrumbshComponent;
  let fixture: ComponentFixture<WithmetaactionsandbreadcrumbshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithmetaactionsandbreadcrumbshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithmetaactionsandbreadcrumbshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
