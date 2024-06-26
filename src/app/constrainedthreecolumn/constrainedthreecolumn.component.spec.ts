import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrainedthreecolumnComponent } from './constrainedthreecolumn.component';

describe('ConstrainedthreecolumnComponent', () => {
  let component: ConstrainedthreecolumnComponent;
  let fixture: ComponentFixture<ConstrainedthreecolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstrainedthreecolumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstrainedthreecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
