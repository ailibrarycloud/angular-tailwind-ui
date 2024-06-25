import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarknavwithwhitepageheaderComponent } from './darknavwithwhitepageheader.component';

describe('DarknavwithwhitepageheaderComponent', () => {
  let component: DarknavwithwhitepageheaderComponent;
  let fixture: ComponentFixture<DarknavwithwhitepageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarknavwithwhitepageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarknavwithwhitepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
