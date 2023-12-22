import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalComponent {

  public constructor(private modalRef : MatDialog){}

  public openGuest(){
    this.modalRef.open(GuestComponent);
  }
 
  

  public close(){
    this.modalRef.closeAll();
  }
}
