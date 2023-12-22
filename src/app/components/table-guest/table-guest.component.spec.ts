import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGuest } from './table-guest.component';

describe('TableComponent', () => {
  let component: TableGuest;
  let fixture: ComponentFixture<TableGuest>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGuest]
    });
    fixture = TestBed.createComponent(TableGuest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
