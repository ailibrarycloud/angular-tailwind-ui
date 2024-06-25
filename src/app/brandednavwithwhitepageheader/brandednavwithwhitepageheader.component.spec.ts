import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandednavwithwhitepageheaderComponent } from './brandednavwithwhitepageheader.component';

describe('BrandednavwithwhitepageheaderComponent', () => {
  let component: BrandednavwithwhitepageheaderComponent;
  let fixture: ComponentFixture<BrandednavwithwhitepageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandednavwithwhitepageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandednavwithwhitepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
