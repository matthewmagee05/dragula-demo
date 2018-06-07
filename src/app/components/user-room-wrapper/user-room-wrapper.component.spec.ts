import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoomWrapperComponent } from './user-room-wrapper.component';

describe('UserRoomWrapperComponent', () => {
  let component: UserRoomWrapperComponent;
  let fixture: ComponentFixture<UserRoomWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoomWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoomWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
