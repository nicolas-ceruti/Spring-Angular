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



@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    HomeComponent,
    BookingComponent
  ],
  imports: [ 
    HttpClientModule,
    TableGuest,
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
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
