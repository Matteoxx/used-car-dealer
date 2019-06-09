import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SellComponent } from "./sell/sell.component";
import { BuyComponent } from "./buy/buy.component";
import { FilterCarsComponent } from "./filter-cars/filter-cars.component";
import { CarsService } from "./cars.service";
import { CarDetailsComponent } from "./buy/car-details/car-details.component";
import { AuthService } from "./auth.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SellComponent,
    BuyComponent,
    FilterCarsComponent,
    CarDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CarsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
