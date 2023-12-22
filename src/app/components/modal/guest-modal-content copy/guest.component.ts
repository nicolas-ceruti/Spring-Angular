import { Component, Inject } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { HomeComponent } from '../../home/home.component';
import { ApiService } from '../../../service/api.service'; 


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {

  public constructor(private modal: ModalComponent, private apiService: ApiService) { }

  name: string = "";
  document: string = "";
  number: string = "";


  salvarDados() {
    if (this.name && this.document && this.number) {

      const dados = {
        name: this.name,
        document: this.document,
        number: this.number
      };

      this.apiService.createGuest(dados).subscribe((dados) => {
        this.clearForm()
      },
        (erro) => {
          console.error('Erro ao buscar dados da /booking', erro);
        })

    } else {
      console.log("Ainda existem campos vazios")
    }
  }

  clearForm(){
    this.name = ""; 
    this.document = ""; 
    this.number = ""; 
  }


}
