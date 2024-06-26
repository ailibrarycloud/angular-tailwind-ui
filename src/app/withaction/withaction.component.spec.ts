import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithactionComponent } from './withaction.component';

describe('WithactionComponent', () => {
  let component: WithactionComponent;
  let fixture: ComponentFixture<WithactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
