import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithavatarmetaanddropdownComponent } from './withavatarmetaanddropdown.component';

describe('WithavatarmetaanddropdownComponent', () => {
  let component: WithavatarmetaanddropdownComponent;
  let fixture: ComponentFixture<WithavatarmetaanddropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithavatarmetaanddropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithavatarmetaanddropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
