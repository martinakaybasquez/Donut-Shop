import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: "Home", component:HomeComponent},
    {path: "Details/:id", component:DetailsComponent},
    {path: "Cart", component:CartComponent},
    {path: "", redirectTo: "/Home", pathMatch:"full"},
    {path: "**", component:ErrorComponent}
];

