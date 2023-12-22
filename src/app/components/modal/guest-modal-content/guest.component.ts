import { Component, Inject } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { ApiService } from '../../../service/api.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {
  name: string = "";
  document: string = "";
  number: string = "";

  public constructor(
    private modal: ModalComponent,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<GuestComponent>) { }

  salvarDados() {
    if (this.name && this.document && this.number) {

      const dados = {
        name: this.name,
        document: this.document,
        number: this.number
      };

      this.apiService.createGuest(dados).subscribe((dados) => {
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

  clearForm() {
    this.name = "";
    this.document = "";
    this.number = "";
  }

  closeModal(){
    this.dialogRef.close();
  }




}
