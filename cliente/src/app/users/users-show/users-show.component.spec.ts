import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShowComponent } from './users-show.component';

describe('UsersShowComponent', () => {
  let component: UsersShowComponent;
  let fixture: ComponentFixture<UsersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
