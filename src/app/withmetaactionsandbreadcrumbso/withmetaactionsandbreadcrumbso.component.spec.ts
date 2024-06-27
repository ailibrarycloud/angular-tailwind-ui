import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithmetaactionsandbreadcrumbsoComponent } from './withmetaactionsandbreadcrumbso.component';

describe('WithmetaactionsandbreadcrumbsoComponent', () => {
  let component: WithmetaactionsandbreadcrumbsoComponent;
  let fixture: ComponentFixture<WithmetaactionsandbreadcrumbsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithmetaactionsandbreadcrumbsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithmetaactionsandbreadcrumbsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
