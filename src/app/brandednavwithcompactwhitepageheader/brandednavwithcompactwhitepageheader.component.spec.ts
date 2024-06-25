import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandednavwithcompactwhitepageheaderComponent } from './brandednavwithcompactwhitepageheader.component';

describe('BrandednavwithcompactwhitepageheaderComponent', () => {
  let component: BrandednavwithcompactwhitepageheaderComponent;
  let fixture: ComponentFixture<BrandednavwithcompactwhitepageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandednavwithcompactwhitepageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandednavwithcompactwhitepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
