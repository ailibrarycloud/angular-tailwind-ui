import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftalignedondarkComponent } from './leftalignedondark.component';

describe('LeftalignedondarkComponent', () => {
  let component: LeftalignedondarkComponent;
  let fixture: ComponentFixture<LeftalignedondarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftalignedondarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftalignedondarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
