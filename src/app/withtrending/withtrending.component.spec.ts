import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithtrendingComponent } from './withtrending.component';

describe('WithtrendingComponent', () => {
  let component: WithtrendingComponent;
  let fixture: ComponentFixture<WithtrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithtrendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithtrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
