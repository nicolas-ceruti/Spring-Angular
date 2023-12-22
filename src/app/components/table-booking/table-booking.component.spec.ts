import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBooking } from './table-booking.component';

describe('TableComponent', () => {
  let component: TableBooking;
  let fixture: ComponentFixture<TableBooking>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBooking]
    });
    fixture = TestBed.createComponent(TableBooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
