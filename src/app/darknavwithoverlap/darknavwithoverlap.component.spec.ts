import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarknavwithoverlapComponent } from './darknavwithoverlap.component';

describe('DarknavwithoverlapComponent', () => {
  let component: DarknavwithoverlapComponent;
  let fixture: ComponentFixture<DarknavwithoverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarknavwithoverlapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarknavwithoverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
