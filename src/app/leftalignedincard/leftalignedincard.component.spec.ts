import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftalignedincardComponent } from './leftalignedincard.component';

describe('LeftalignedincardComponent', () => {
  let component: LeftalignedincardComponent;
  let fixture: ComponentFixture<LeftalignedincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftalignedincardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftalignedincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
