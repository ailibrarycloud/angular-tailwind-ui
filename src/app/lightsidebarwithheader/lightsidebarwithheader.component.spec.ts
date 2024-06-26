import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsidebarwithheaderComponent } from './lightsidebarwithheader.component';

describe('LightsidebarwithheaderComponent', () => {
  let component: LightsidebarwithheaderComponent;
  let fixture: ComponentFixture<LightsidebarwithheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightsidebarwithheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightsidebarwithheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
