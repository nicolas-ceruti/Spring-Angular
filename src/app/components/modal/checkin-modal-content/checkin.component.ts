import { Component, Inject, Input } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { ApiService } from '../../../service/api.service';
import { format } from 'date-fns';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],

})
export class CheckinComponent {
  checkinId: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private apiService: ApiService) {}

  checkinDate: Date = new Date();
  isAdvance: boolean = false;

  ngOnInit() {
    this.checkinId = this.data?.data?.id;
  }

  salvarDados() {
    let formattedCheckinDate;

    if(this.isAdvance === true){
      formattedCheckinDate = format(this.checkinDate, 'yyyy-MM-dd\'T\'13:00:00');
    }else{
      formattedCheckinDate = format(this.checkinDate, 'yyyy-MM-dd\'T\'14:01:00');
    }

    if (this.checkinDate) {

      const dados = {
        id: this.checkinId,
        checkin: formattedCheckinDate
      };

      this.apiService.checkin(dados).subscribe((dados) => {
        this.clearForm()
      },
        (erro) => {
          console.error('Erro ao buscar dados da /booking', erro);
        })

    } else {
      console.log("Ainda existem campos vazios")
    }
  }
  clearForm() {
    this.checkinDate = new Date();
    this.isAdvance = false;
  }



}
