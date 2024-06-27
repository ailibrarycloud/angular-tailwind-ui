import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftalignedwithinlineactionsComponent } from './leftalignedwithinlineactions.component';

describe('LeftalignedwithinlineactionsComponent', () => {
  let component: LeftalignedwithinlineactionsComponent;
  let fixture: ComponentFixture<LeftalignedwithinlineactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftalignedwithinlineactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftalignedwithinlineactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
