import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDebounceTimeComponent } from './reactive-form-debounce-time.component';

describe('ReactiveFormDebounceTimeComponent', () => {
  let component: ReactiveFormDebounceTimeComponent;
  let fixture: ComponentFixture<ReactiveFormDebounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormDebounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormDebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
