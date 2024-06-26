import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthwithnarrowsidebarandhComponent } from './fullwidthwithnarrowsidebarandh.component';

describe('FullwidthwithnarrowsidebarandhComponent', () => {
  let component: FullwidthwithnarrowsidebarandhComponent;
  let fixture: ComponentFixture<FullwidthwithnarrowsidebarandhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullwidthwithnarrowsidebarandhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullwidthwithnarrowsidebarandhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
