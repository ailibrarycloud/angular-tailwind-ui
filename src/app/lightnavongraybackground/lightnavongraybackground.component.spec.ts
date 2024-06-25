import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightnavongraybackgroundComponent } from './lightnavongraybackground.component';

describe('LightnavongraybackgroundComponent', () => {
  let component: LightnavongraybackgroundComponent;
  let fixture: ComponentFixture<LightnavongraybackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightnavongraybackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightnavongraybackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
