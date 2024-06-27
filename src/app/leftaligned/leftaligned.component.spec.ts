import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftalignedComponent } from './leftaligned.component';

describe('LeftalignedComponent', () => {
  let component: LeftalignedComponent;
  let fixture: ComponentFixture<LeftalignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftalignedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftalignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
