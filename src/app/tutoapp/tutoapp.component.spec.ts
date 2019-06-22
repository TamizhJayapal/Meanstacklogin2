import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoappComponent } from './tutoapp.component';

describe('TutoappComponent', () => {
  let component: TutoappComponent;
  let fixture: ComponentFixture<TutoappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
