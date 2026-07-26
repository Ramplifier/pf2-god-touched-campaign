import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBlock } from './skill-block';

describe('SkillBlock', () => {
  let component: SkillBlock;
  let fixture: ComponentFixture<SkillBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
