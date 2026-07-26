import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoonView } from './boon-view';

describe('BoonView', () => {
  let component: BoonView;
  let fixture: ComponentFixture<BoonView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoonView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoonView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
