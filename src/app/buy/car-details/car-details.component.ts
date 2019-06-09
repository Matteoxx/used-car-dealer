import { Component, OnInit, Input } from "@angular/core";
import { CarsService } from "src/app/cars.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.css"]
})
export class CarDetailsComponent implements OnInit {
  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  carDetails = {};
  carId = 0;

  userData = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carId = +params["id"];
      this.carsService.getAvailableCarsById(this.carId).subscribe(
        (carDetails: {}) => {
          this.carDetails = carDetails;
        },
        err => {
          console.log(err);
        }
      );
    });

    if (JSON.parse(localStorage.getItem("userData"))) {
      this.userData = true;
    }
  }

  onCarReserve() {
    let userId = JSON.parse(localStorage.getItem("userData")).userId;
    this.carsService.reserveCar(this.carId, userId).subscribe(
      (resp: Response) => {
        console.log(resp);
      },
      (err: Error) => {
        console.log(err);
      }
    );
    this.router.navigate(["/"]);
  }

  onCarBuy() {
    let userId = JSON.parse(localStorage.getItem("userData")).userId;
    this.carsService.buyCar(this.carId, userId).subscribe(
      (resp: Response) => {
        console.log(resp);
      },
      (err: Error) => {
        console.log(err);
      }
    );
    this.router.navigate(["/"]);
  }
}
