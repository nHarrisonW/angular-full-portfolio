import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardsComponent } from './skills-cards.component';

describe('SkillsCardsComponent', () => {
  let component: SkillsCardsComponent;
  let fixture: ComponentFixture<SkillsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCardsComponent]
    });
    fixture = TestBed.createComponent(SkillsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
