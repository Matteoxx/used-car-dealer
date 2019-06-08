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

  getfilterCars(filterOptions) {
    return this.http.post(
      "http://localhost:5000/api/cars/filter",
      filterOptions,
      httpOptions
    );
  }
}
