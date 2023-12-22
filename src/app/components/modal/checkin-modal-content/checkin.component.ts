import { Component, Inject, Input } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { ApiService } from '../../../service/api.service';
import { format } from 'date-fns';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],

})
export class CheckinComponent {
  checkinId: any;
  checkinDate: Date = new Date();
  isAdvance: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
     private apiService: ApiService,
     private dialogRef: MatDialogRef<CheckinComponent>) { }

  ngOnInit() {
    this.checkinId = this.data?.data?.id;
  }

  salvarDados() {
    let formattedCheckinDate  = this.formatDateForApi();

    if (this.checkinDate) {

      const dados = {
        id: this.checkinId,
        checkin: formattedCheckinDate
      };

      this.apiService.checkin(dados).subscribe((dados) => {
        this.clearForm()
        this.closeModal();

      },
        (erro) => {
          console.error('Erro ao buscar dados da /booking', erro);
        })

    } else {
      console.log("Ainda existem campos vazios")
    }
  }
  private clearForm() {
    this.checkinDate = new Date();
    this.isAdvance = false;
  }

  private formatDateForApi(): string {
    const time = this.isAdvance ? '13:10:00' : '14:10:00';
    return format(this.checkinDate, `yyyy-MM-dd'T'${time}`);
  }

  closeModal(){
    this.dialogRef.close();
  }



}
