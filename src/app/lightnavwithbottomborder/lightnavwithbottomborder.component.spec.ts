import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightnavwithbottomborderComponent } from './lightnavwithbottomborder.component';

describe('LightnavwithbottomborderComponent', () => {
  let component: LightnavwithbottomborderComponent;
  let fixture: ComponentFixture<LightnavwithbottomborderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightnavwithbottomborderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightnavwithbottomborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
