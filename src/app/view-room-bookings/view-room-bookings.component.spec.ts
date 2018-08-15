import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomBookingsComponent } from './view-room-bookings.component';

describe('ViewRoomBookingsComponent', () => {
  let component: ViewRoomBookingsComponent;
  let fixture: ComponentFixture<ViewRoomBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRoomBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoomBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
