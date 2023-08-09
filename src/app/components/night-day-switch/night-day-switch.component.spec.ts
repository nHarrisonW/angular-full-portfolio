import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightDaySwitchComponent } from './night-day-switch.component';

describe('NightDaySwitchComponent', () => {
  let component: NightDaySwitchComponent;
  let fixture: ComponentFixture<NightDaySwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NightDaySwitchComponent]
    });
    fixture = TestBed.createComponent(NightDaySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
