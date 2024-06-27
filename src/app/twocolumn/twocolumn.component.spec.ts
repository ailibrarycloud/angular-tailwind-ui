import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwocolumnComponent } from './twocolumn.component';

describe('TwocolumnComponent', () => {
  let component: TwocolumnComponent;
  let fixture: ComponentFixture<TwocolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwocolumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwocolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
