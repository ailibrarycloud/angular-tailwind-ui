import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesectionComponent } from './simplesection.component';

describe('SimplesectionComponent', () => {
  let component: SimplesectionComponent;
  let fixture: ComponentFixture<SimplesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplesectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
