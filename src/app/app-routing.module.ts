import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BuyComponent } from "./buy/buy.component";
import { SellComponent } from "./sell/sell.component";
import { CarDetailsComponent } from "./buy/car-details/car-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "kup", component: BuyComponent },
  { path: "kup/:id", component: CarDetailsComponent },
  { path: "sprzedaj", component: SellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
