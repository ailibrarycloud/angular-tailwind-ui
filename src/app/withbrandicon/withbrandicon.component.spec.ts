import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithbrandiconComponent } from './withbrandicon.component';

describe('WithbrandiconComponent', () => {
  let component: WithbrandiconComponent;
  let fixture: ComponentFixture<WithbrandiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithbrandiconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithbrandiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
