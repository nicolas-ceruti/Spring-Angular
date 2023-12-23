import { Component, Inject } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-booking',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],

})
export class DeleteComponent {
  id: number = 0;

  public constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<GuestComponent>) { }

    ngOnInit() {
      this.id = this.data?.data?.id;
    }

  deleteBooking() {

      this.apiService.deleteBooking(this.id).subscribe((dados) => {
        this.closeModal();
        this.openSnackBar("Reserva excluída com sucesso! Atualize a tabela!", "Ok")

      },
        (erro) => {
          this.openSnackBar("Não foi possível excluir a reserva!", "Ok")
        })

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
