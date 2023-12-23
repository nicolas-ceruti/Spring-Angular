import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './components/modal/guest-modal-content/guest.component';
import { HomeComponent } from './components/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal-component/modal.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { TableGuest } from './components/table-guest/table-guest.component';
import { TableBooking } from './components/table-booking/table-booking.component';
import { BookingComponent } from './components/modal/booking-modal-content/booking.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckinComponent } from './components/modal/checkin-modal-content/checkin.component';
import { CheckoutComponent } from './components/modal/checkout-modal-content/checkout.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DatePipe } from '@angular/common';
import { DeleteComponent } from './components/modal/delete-modal-content/delete.component';



@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    HomeComponent,
    BookingComponent,
    CheckinComponent,
    CheckoutComponent,
    DeleteComponent
  ],
  imports: [ 
    HttpClientModule,
    TableGuest,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    TableBooking,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [ModalComponent , DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
