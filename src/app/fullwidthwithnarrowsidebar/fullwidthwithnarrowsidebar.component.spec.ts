import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthwithnarrowsidebarComponent } from './fullwidthwithnarrowsidebar.component';

describe('FullwidthwithnarrowsidebarComponent', () => {
  let component: FullwidthwithnarrowsidebarComponent;
  let fixture: ComponentFixture<FullwidthwithnarrowsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullwidthwithnarrowsidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullwidthwithnarrowsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
