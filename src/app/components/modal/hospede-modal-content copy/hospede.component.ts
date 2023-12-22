import { Component, Inject } from '@angular/core';
import { ModalComponent } from '../modal-component/modal.component';
import { HomeComponent } from '../../home/home.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../service/api.service'; 


@Component({
  selector: 'app-hospede',
  templateUrl: './hospede.component.html',
  styleUrls: ['./hospede.component.css']
})
export class HospedeComponent {

  public constructor(private modal : ModalComponent, private apiService: ApiService){}


  name: string = "";
  document: string = "";
  number: string = "";

  salvarDados() {
    console.log('Nome Completo:', this.name);
    console.log('document:', this.document);
    console.log('number:', this.number);

    const dados = {
      name: this.name,
      document: this.document,
      number: this.number
    };

    this.apiService.createGuest(dados).subscribe((dados) => {
      console.log("criado")
    },
    (erro) => {
      console.error('Erro ao buscar dados da /booking', erro);
    })
  }
  


}
