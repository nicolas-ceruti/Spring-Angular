import { Component, Inject } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { ApiService } from '../../../service/api.service';
import { format } from 'date-fns';
import { MatDialogRef } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],

})
export class BookingComponent {
  scheduledCheckinDate: Date = new Date();
  scheduledCheckoutDate: Date = new Date();
  id: number = 0;
  usePark: boolean = false;

  public constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<GuestComponent>) { }


  salvarDados() {
    const formattedCheckinDate = format(this.scheduledCheckinDate, 'yyyy-MM-dd\'T\'14:01:00');
    const formattedCheckoutDate = format(this.scheduledCheckoutDate, 'yyyy-MM-dd\'T\'11:59:00');

    if (formattedCheckoutDate && formattedCheckinDate && this.id) {

      const dados = {
        guest: {
          id: this.id,
        },
        scheduledCheckinDate: formattedCheckinDate,
        scheduledCheckoutDate: formattedCheckoutDate,
        usePark: this.usePark
      };

      this.apiService.createBooking(dados).subscribe((dados) => {
        this.clearForm();
        this.closeModal();

      },
        (erro) => {
          console.error('Erro ao buscar dados da /booking', erro);
        })

    } else {
      console.log("Ainda existem campos vazios")
    }
  }
  clearForm() {
    this.id = 0;
    this.scheduledCheckinDate = new Date();
    this.scheduledCheckinDate = new Date();
    this.usePark = false;
  }

  closeModal(){
    this.dialogRef.close();
  }



}
