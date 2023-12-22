import { Component, Inject, Input } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { format } from 'date-fns';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],

})
export class CheckoutComponent {
  bookingId: any;
  parkFee: any;
  dailyValue: any;
  checkoutFee: any;
  finalValue: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private apiService: ApiService) { }
  panelOpenState = false;

  checkoutDate: Date = new Date();
  isLate: boolean = false;

  ngOnInit() {
    this.bookingId = this.data?.data?.id;
    this.parkFee = this.data?.data.parkFee;
    this.dailyValue = this.data?.data.dailyValue;
    this.checkoutFee = this.data?.data.checkoutFee;
    this.finalValue = this.data?.data.finalValue;

  }

  onCheckoutDateChange(event: any) {
    console.log('Checkout Date changed:', this.checkoutDate);
  }

  salvarDados() {
    let formattedCheckoutDate;

    if (this.isLate === true) {
      formattedCheckoutDate = format(this.checkoutDate, 'yyyy-MM-dd\'T\'12:10:00');
    } else {
      formattedCheckoutDate = format(this.checkoutDate, 'yyyy-MM-dd\'T\'11:00:00');
    }

    if (this.checkoutDate) {

      const dados = {
        id: this.bookingId,
        checkout: formattedCheckoutDate
      };

      this.apiService.checkout(dados).subscribe((dados) => {
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
    this.checkoutDate = new Date();
    this.isLate = false;
  }



}
