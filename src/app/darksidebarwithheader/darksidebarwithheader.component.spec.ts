import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarksidebarwithheaderComponent } from './darksidebarwithheader.component';

describe('DarksidebarwithheaderComponent', () => {
  let component: DarksidebarwithheaderComponent;
  let fixture: ComponentFixture<DarksidebarwithheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarksidebarwithheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarksidebarwithheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
