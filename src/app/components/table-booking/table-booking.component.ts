import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'booking-table',
  styleUrls: ['table-booking.component.css'],
  templateUrl: 'table-booking.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TableBooking implements AfterViewInit {
  @Input() elementData: Booking[] = [];
  displayedColumns: string[] = ['id', 'guestName', 'scheduledCheckinDate', 'scheduledCheckoutDate', 'checkin', 'checkout', 'usePark'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Booking>(this.elementData);

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Booking>(this.elementData);
    this.dataSource.paginator = this.paginator;
  }

}

export interface Booking {
  id: number;
  guestName: string;
  checkin: Date;
  checkout: Date;
  scheduledCheckinDate: Date;
  scheduledCheckoutDate: Date;
  usePark: boolean;
  parkFee: number;
  dailyValue: number;
  checkoutFee: number;
  finalValue: number;

}

