import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthsecondarycolumnonrighComponent } from './fullwidthsecondarycolumnonrigh.component';

describe('FullwidthsecondarycolumnonrighComponent', () => {
  let component: FullwidthsecondarycolumnonrighComponent;
  let fixture: ComponentFixture<FullwidthsecondarycolumnonrighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullwidthsecondarycolumnonrighComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullwidthsecondarycolumnonrighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
