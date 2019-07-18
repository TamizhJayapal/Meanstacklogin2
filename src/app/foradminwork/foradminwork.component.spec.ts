import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForadminworkComponent } from './foradminwork.component';

describe('ForadminworkComponent', () => {
  let component: ForadminworkComponent;
  let fixture: ComponentFixture<ForadminworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForadminworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForadminworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
