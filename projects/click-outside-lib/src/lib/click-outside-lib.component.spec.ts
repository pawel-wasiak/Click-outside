import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickOutsideLibComponent } from './click-outside-lib.component';

describe('ClickOutsideLibComponent', () => {
  let component: ClickOutsideLibComponent;
  let fixture: ComponentFixture<ClickOutsideLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickOutsideLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickOutsideLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
