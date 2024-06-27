import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithmetaandactionsComponent } from './withmetaandactions.component';

describe('WithmetaandactionsComponent', () => {
  let component: WithmetaandactionsComponent;
  let fixture: ComponentFixture<WithmetaandactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithmetaandactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithmetaandactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
