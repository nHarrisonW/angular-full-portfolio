import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationPageComponent } from './recomendation-page.component';

describe('RecomendationPageComponent', () => {
  let component: RecomendationPageComponent;
  let fixture: ComponentFixture<RecomendationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendationPageComponent]
    });
    fixture = TestBed.createComponent(RecomendationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
