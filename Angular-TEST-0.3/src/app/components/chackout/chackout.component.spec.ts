import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChackoutComponent } from './chackout.component';

describe('ChackoutComponent', () => {
  let component: ChackoutComponent;
  let fixture: ComponentFixture<ChackoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChackoutComponent]
    });
    fixture = TestBed.createComponent(ChackoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
