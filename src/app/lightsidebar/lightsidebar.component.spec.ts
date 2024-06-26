import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsidebarComponent } from './lightsidebar.component';

describe('LightsidebarComponent', () => {
  let component: LightsidebarComponent;
  let fixture: ComponentFixture<LightsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightsidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
