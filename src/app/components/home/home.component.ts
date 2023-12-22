import { ChangeDetectorRef, Component, Injectable, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal-component/modal.component';
import { ApiService } from '../../service/api.service'; // Substitua pelo caminho correto
import { TableGuest } from '../table-guest/table-guest.component';
import { TableBooking } from '../table-booking/table-booking.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public selected: Date | null = null;

  public bookingList: any[] = [];
  public guestList: any[] = [];


  public constructor(private modal: ModalComponent, private apiService: ApiService) { }

  @ViewChild('guestTable')
  guestTable!: TableGuest;

  @ViewChild('bookingTable')
  bookingTable!: TableBooking;

  ngOnInit() {
    this.getBookings();
    this.getGuests();

  }

  callUpdateTable() {
    if (this.guestTable) {
      this.guestTable.updateTable(this.guestList);
    }
  }

  callUpdateBookingtable() {
    if (this.bookingTable) {
      this.bookingTable.updateTable(this.bookingList);
    }
  }


  getBookings() {
    this.apiService.getBookings().subscribe(
      (dados: any[]) => {
        this.bookingList = dados;
        this.callUpdateBookingtable();
      },
      (erro: any) => {
        console.error('Erro ao buscar dados da /booking', erro);
      }
    );
  }

  getGuests() {
    this.apiService.getGuests().subscribe(
      (dados: any[]) => {
        this.guestList = dados;
        this.callUpdateTable();

      },
      (erro: any) => {
        console.error('Erro ao buscar dados /guest', erro);
      }
    );
  }

  locateActiveGuests() {
    this.apiService.locateActiveGuests().subscribe(
      (dados: any[]) => {
        this.guestList = dados;
        this.callUpdateTable();

      },
      (erro: any) => {
        console.error('Erro ao buscar dados /guest', erro);
      }
    );
  }

  locateScheduledBookings() {
    this.apiService.locateScheduledBookings().subscribe(
      (dados: any[]) => {
        this.guestList = dados;
        this.callUpdateTable();

      },
      (erro: any) => {
        console.error('Erro ao buscar dados /guest', erro);
      }
    );
  }


  openGuest() {
    return this.modal.openGuest();
  }

  openBooking() {
    return this.modal.openBooking();
  }
}


