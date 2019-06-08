import { Component, OnInit } from "@angular/core";
import { CarsService } from "../cars.service";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"]
})
export class BuyComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  cars = [];

  ngOnInit() {
    this.carsService.getAvailableCars().subscribe(
      (cars: []) => {
        this.cars = cars;
      },
      err => {
        console.log(err);
      }
    );
  }

  carsChanged(cars: []) {
    this.cars = cars;
  }
}
