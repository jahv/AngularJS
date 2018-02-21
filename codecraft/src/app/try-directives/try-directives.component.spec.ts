import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryDirectivesComponent } from './try-directives.component';

describe('TryDirectivesComponent', () => {
  let component: TryDirectivesComponent;
  let fixture: ComponentFixture<TryDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
