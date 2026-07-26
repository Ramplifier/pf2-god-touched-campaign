import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBottomButton } from './navbar-bottom-button';

describe('NavbarBottomButton', () => {
  let component: NavbarBottomButton;
  let fixture: ComponentFixture<NavbarBottomButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBottomButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBottomButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
