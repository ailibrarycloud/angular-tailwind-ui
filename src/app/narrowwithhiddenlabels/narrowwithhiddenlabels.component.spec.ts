import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowwithhiddenlabelsComponent } from './narrowwithhiddenlabels.component';

describe('NarrowwithhiddenlabelsComponent', () => {
  let component: NarrowwithhiddenlabelsComponent;
  let fixture: ComponentFixture<NarrowwithhiddenlabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarrowwithhiddenlabelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NarrowwithhiddenlabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
