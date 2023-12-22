import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';

import { Injectable } from '@angular/core';
import { BookingComponent } from '../booking-modal-content/booking.component';

@Injectable({
  providedIn: 'root',
})
export class ModalComponent {

  public constructor(private modalRef : MatDialog){}

  public openGuest(){
    this.modalRef.open(GuestComponent);
  }

  public openBooking(){
    this.modalRef.open(BookingComponent);
  }
 
  

  public close(){
    this.modalRef.closeAll();
  }
}
