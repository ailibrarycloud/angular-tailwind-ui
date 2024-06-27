import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftalignedstripedComponent } from './leftalignedstriped.component';

describe('LeftalignedstripedComponent', () => {
  let component: LeftalignedstripedComponent;
  let fixture: ComponentFixture<LeftalignedstripedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftalignedstripedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftalignedstripedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
