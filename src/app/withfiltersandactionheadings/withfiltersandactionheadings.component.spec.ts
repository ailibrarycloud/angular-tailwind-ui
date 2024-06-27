import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithfiltersandactionheadingsComponent } from './withfiltersandactionheadings.component';

describe('WithfiltersandactionheadingsComponent', () => {
  let component: WithfiltersandactionheadingsComponent;
  let fixture: ComponentFixture<WithfiltersandactionheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithfiltersandactionheadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithfiltersandactionheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
