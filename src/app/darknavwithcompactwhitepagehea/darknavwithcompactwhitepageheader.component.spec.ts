import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarknavwithcompactwhitepageheaderComponent } from './darknavwithcompactwhitepageheader.component';

describe('DarknavwithcompactwhitepageheaderComponent', () => {
  let component: DarknavwithcompactwhitepageheaderComponent;
  let fixture: ComponentFixture<DarknavwithcompactwhitepageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarknavwithcompactwhitepageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarknavwithcompactwhitepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
