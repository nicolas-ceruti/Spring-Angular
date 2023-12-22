import { MatDialog } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';

import { Injectable } from '@angular/core';
import { BookingComponent } from '../booking-modal-content/booking.component';
import { CheckinComponent } from '../checkin-modal-content/checkin.component';
import { CheckoutComponent } from '../checkout-modal-content/checkout.component';

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

  
  public openCheckin(data: any){
    this.modalRef.open(CheckinComponent,   { data }  );
  }

  public openCheckout(data: any){
    this.modalRef.open(CheckoutComponent,   { data }  );
  }
 
 
  

  public close(){
    this.modalRef.closeAll();
  }
}
