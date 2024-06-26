import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsidebarwithoffwhitebackgrComponent } from './lightsidebarwithoffwhitebackgr.component';

describe('LightsidebarwithoffwhitebackgrComponent', () => {
  let component: LightsidebarwithoffwhitebackgrComponent;
  let fixture: ComponentFixture<LightsidebarwithoffwhitebackgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightsidebarwithoffwhitebackgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightsidebarwithoffwhitebackgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
