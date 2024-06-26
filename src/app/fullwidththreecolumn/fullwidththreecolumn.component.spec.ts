import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidththreecolumnComponent } from './fullwidththreecolumn.component';

describe('FullwidththreecolumnComponent', () => {
  let component: FullwidththreecolumnComponent;
  let fixture: ComponentFixture<FullwidththreecolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullwidththreecolumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullwidththreecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
