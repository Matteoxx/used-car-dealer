import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getAvailableCars() {
    return this.http.get("http://localhost:5000/api/cars/");
  }

  getAvailableCarsById(id: number) {
    return this.http.get("http://localhost:5000/api/cars/" + id);
  }
  getfilterCars(filterOptions) {
    return this.http.post(
      "http://localhost:5000/api/cars/filter",
      filterOptions,
      httpOptions
    );
  }

  buyCar(carId: number, userId: number) {
    return this.http.post(
      `http://localhost:5000/api/cars/${carId}/buy`,
      { userId: userId, carId: carId },
      httpOptions
    );
  }

  reserveCar(carId: number, userId: number) {
    return this.http.post(
      `http://localhost:5000/api/cars/${carId}/reserve`,
      { id_klienta: userId, id_samochodu: carId },
      httpOptions
    );
  }
}
