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
  carId: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carId = +params["id"];
      this.carsService.getAvailableCarsById(this.carId).subscribe(
        (carDetails: {}) => {
          console.log(carDetails);
          this.carDetails = carDetails;
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  onCarReserve() {
    console.log("rezerwacja");
    let userId = 0;
    this.carsService.reserveCar(this.carId, userId).subscribe(
      (resp: Response) => {
        console.log(resp);
      },
      (err: Error) => {
        console.log(err);
      }
    );
    this.router.navigate(["buy"], { relativeTo: this.route });
  }

  onCarBuy() {
    console.log("zakup");
    let userId = 0;
    this.carsService.buyCar(this.carId, userId).subscribe(
      (resp: Response) => {
        console.log(resp);
      },
      (err: Error) => {
        console.log(err);
      }
    );
    this.router.navigate(["buy"], { relativeTo: this.route });
  }
}
