import { Component, Inject } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GuestComponent } from '../guest-modal-content/guest.component';



@Component({
  selector: 'app-booking',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],

})
export class DeleteComponent {
  id: number = 0;

  public constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<GuestComponent>) { }

    ngOnInit() {
      this.id = this.data?.data?.id;
    }

  deleteBooking() {

      this.apiService.deleteBooking(this.id).subscribe((dados) => {
        this.closeModal();

      },
        (erro) => {
          console.error('Erro ao deletar registro da /booking', erro);
        })

  }
 

  closeModal(){
    this.dialogRef.close();
  }



}
