import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrainedwithstickycolumnsComponent } from './constrainedwithstickycolumns.component';

describe('ConstrainedwithstickycolumnsComponent', () => {
  let component: ConstrainedwithstickycolumnsComponent;
  let fixture: ComponentFixture<ConstrainedwithstickycolumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstrainedwithstickycolumnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstrainedwithstickycolumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
