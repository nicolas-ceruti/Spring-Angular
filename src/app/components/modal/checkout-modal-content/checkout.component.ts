import { Component, Inject } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { format } from 'date-fns';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


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
  panelOpenState = false;
  checkoutDate: Date = new Date();
  isLate: boolean = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CheckoutComponent>) { }

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
    if (new Date(this.checkoutDate) < new Date(this.checkin)) {
      this.checkoutDate = new Date(this.checkin);
    } else {
      this.calculateValue()
    }
  }

  public salvarDados() {
    const formattedCheckoutDate = this.formatDateForApi();

    if (this.checkoutDate) {
      const dados = {
        id: this.bookingId,
        checkout: formattedCheckoutDate
      };

      this.apiService.checkout(dados).subscribe((dados) => {
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

  public calculateValue() {
    const formattedCheckoutDate = this.formatDateForApi();

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

  private clearForm() {
    this.checkoutDate = new Date();
    this.isLate = false;
  }

  private formatDateForApi(): string {
    const time = this.isLate ? '12:10:00' : '11:00:00';
    return format(this.checkoutDate, `yyyy-MM-dd'T'${time}`);
  }

  closeModal(){
    this.dialogRef.close();
  }



}
