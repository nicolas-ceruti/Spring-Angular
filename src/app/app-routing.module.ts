import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuestComponent } from './components/modal/guest-modal-content/guest.component';

const routes: Routes = [
  {path: "home", component : HomeComponent},
  {path: "hospede", component : GuestComponent},
  { path: 'hospede', redirectTo: '/hospede', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
