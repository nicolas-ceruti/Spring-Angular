import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  private headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*"
  });

  // Opções da requisição, incluindo cabeçalhos personalizados
  private options = { headers: this.headers };

  getBookings(): Observable<any> {
    return this.httpClient.get<any>("/api/booking", this.options);
  }

  getGuests(): Observable<any> {
    return this.httpClient.get<any>("/api/guest", this.options);
  }

  locateActiveGuests(): Observable<any> {
    return this.httpClient.get<any>("/api/booking/activeGuest", this.options);
  }

  locateScheduledBookings(): Observable<any> {
    return this.httpClient.get<any>("/api/booking/scheduledBookings", this.options);
  }

  createGuest(guestData: any): Observable<any> {
    return this.httpClient.post<any>('/api/guest', guestData, this.options);
  }

  createBooking(bookingData: any): Observable<any> {
    return this.httpClient.post<any>('/api/booking', bookingData, this.options);
  }

  checkin(bookingData: any): Observable<any> {
    return this.httpClient.post<any>('/api/booking/checkin', bookingData, this.options);
  }

  checkout(bookingData: any): Observable<any> {
    return this.httpClient.post<any>('/api/booking/checkout', bookingData, this.options);
  }

  calculateValue(bookingData: any): Observable<any> {
    return this.httpClient.post<any>('/api/booking/calculateDaily', bookingData, this.options);
  }

  deleteBooking(id: any): Observable<any> {
    return this.httpClient.delete<any>(`/api/booking/${id}` , this.options);
  }
}
