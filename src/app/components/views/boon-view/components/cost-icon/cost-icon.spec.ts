import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostIcon } from './cost-icon';

describe('CostIcon', () => {
  let component: CostIcon;
  let fixture: ComponentFixture<CostIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
