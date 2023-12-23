import { Component, Inject } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { ApiService } from '../../../service/api.service';
import { format } from 'date-fns';
import { MatDialogRef } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';
import { MatSnackBar } from '@angular/material/snack-bar';



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
    private _snackBar: MatSnackBar,
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
        this.openSnackBar("Reserva cadastrada com sucesso! Atualize a tabela!", "Ok")

      },
        (erro) => {
          this.openSnackBar("Certifique-se de que existe algum usuário com este ID", "Ok")          
        })

    } else {
      this.openSnackBar("Preencha os campos corretamente!", "Ok")          
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, 
    });
  }




}
