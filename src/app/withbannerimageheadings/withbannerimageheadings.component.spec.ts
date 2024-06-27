import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithbannerimageheadingsComponent } from './withbannerimageheadings.component';

describe('WithbannerimageheadingsComponent', () => {
  let component: WithbannerimageheadingsComponent;
  let fixture: ComponentFixture<WithbannerimageheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithbannerimageheadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithbannerimageheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
