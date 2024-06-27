import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleondarkstatsComponent } from './simpleondarkstats.component';

describe('SimpleondarkstatsComponent', () => {
  let component: SimpleondarkstatsComponent;
  let fixture: ComponentFixture<SimpleondarkstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleondarkstatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleondarkstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
