import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsidebarwithconstrainedconComponent } from './lightsidebarwithconstrainedcon.component';

describe('LightsidebarwithconstrainedconComponent', () => {
  let component: LightsidebarwithconstrainedconComponent;
  let fixture: ComponentFixture<LightsidebarwithconstrainedconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightsidebarwithconstrainedconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightsidebarwithconstrainedconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
