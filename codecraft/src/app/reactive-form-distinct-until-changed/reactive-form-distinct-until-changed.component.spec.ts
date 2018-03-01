import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDistinctUntilChangedComponent } from './reactive-form-distinct-until-changed.component';

describe('ReactiveFormDistinctUntilChangedComponent', () => {
  let component: ReactiveFormDistinctUntilChangedComponent;
  let fixture: ComponentFixture<ReactiveFormDistinctUntilChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormDistinctUntilChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
