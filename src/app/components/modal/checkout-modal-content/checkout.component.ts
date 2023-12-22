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
  checkin: any;
  usePark: any;

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
    this.checkin = this.data?.data.checkin;
    this.usePark = this.data?.data.usePark;
    this.checkoutDate = this.checkin
    this.calculateValue()

  }

  onCheckoutDateChange(event: any) {
    if(new Date(this.checkoutDate) < new Date(this.checkin)){
      console.log("menor")
      this.checkoutDate = new Date(this.checkin);
    }else{
      this.calculateValue()
    }
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

  calculateValue() {
    let formattedCheckoutDate;

    if (this.isLate === true) {
      formattedCheckoutDate = format(this.checkoutDate, 'yyyy-MM-dd\'T\'12:10:00');
    } else {
      formattedCheckoutDate = format(this.checkoutDate, 'yyyy-MM-dd\'T\'11:00:00');
    }

    if (this.checkoutDate) {

      const dados = {
        checkin: this.checkin,
        checkout: formattedCheckoutDate,
        usePark: this.usePark
      };

      this.apiService.calculateValue(dados).subscribe((dados) => {
        this.dailyValue = dados.dailyValue
        this.parkFee = dados.parkFee
      },
        (erro) => {
          console.error('Erro ao buscar valores', erro);
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
