import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {
  makesAndModels,
  gearbox,
  fuelType,
  colour,
  accidentFree,
  door,
  body,
  engineSize
} from "./cars-options-models";
import { CarsService } from "../cars.service";

@Component({
  selector: "app-filter-cars",
  templateUrl: "./filter-cars.component.html",
  styleUrls: ["./filter-cars.component.css"]
})
export class FilterCarsComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  filterForm: FormGroup;
  @Output() carsChanged = new EventEmitter<[]>();

  makeOptions = makesAndModels.map(elem => elem.brand);
  modelOptions = [];
  gearboxOptions = gearbox;
  fuelTypeOptions = fuelType;
  colourOptions = colour;
  accidentFreeOptions = accidentFree;
  doorOptions = door;
  bodyOptions = body;
  engineSizeOptions = engineSize;

  onMakeChange(make: string) {
    this.modelOptions = [];
    makesAndModels.forEach(elem => {
      if (elem.brand == make) {
        elem.models.forEach(model => this.modelOptions.push(model));
      }
    });
  }

  ngOnInit() {
    this.filterForm = new FormGroup({
      make: new FormControl(""),
      model: new FormControl(""),
      productionYearFrom: new FormControl(""),
      productionYearTo: new FormControl(""),
      mileageFrom: new FormControl(""),
      mileageTo: new FormControl(""),
      priceFrom: new FormControl(""),
      priceTo: new FormControl(""),
      body: new FormControl(""),
      engineSizeFrom: new FormControl(""),
      engineSizeTo: new FormControl(""),
      doorFrom: new FormControl(""),
      doorTo: new FormControl(""),
      fuelType: new FormControl(""),
      gearbox: new FormControl(""),
      colour: new FormControl(""),
      accidentFree: new FormControl("")
    });
  }

  onSubmit() {
    let filterOptions = [
      {
        name: "nazwa_marki",
        type: "=",
        value: this.filterForm.controls.make.value
      },
      {
        name: "nazwa_modelu",
        type: "=",
        value: this.filterForm.controls.model.value
      },
      {
        name: "rok_produkcji",
        type: "between",
        value: {
          from: this.filterForm.controls.productionYearFrom.value,
          to: this.filterForm.controls.productionYearTo.value
        }
      },
      {
        name: "przebieg",
        type: "between",
        value: {
          from: this.filterForm.controls.mileageFrom.value,
          to: this.filterForm.controls.mileageTo.value
        }
      },
      {
        name: "przebieg",
        type: "between",
        value: {
          from: this.filterForm.controls.mileageFrom.value,
          to: this.filterForm.controls.mileageTo.value
        }
      },
      {
        name: "cena",
        type: "between",
        value: {
          from: this.filterForm.controls.priceFrom.value,
          to: this.filterForm.controls.priceTo.value
        }
      },
      {
        name: "nadwozie",
        type: "=",
        value: this.filterForm.controls.body.value
      },
      {
        name: "pojemnosc_silnika",
        type: "between",
        value: {
          from: this.filterForm.controls.engineSizeFrom.value,
          to: this.filterForm.controls.engineSizeTo.value
        }
      },
      {
        name: "ilosc_drzwi",
        type: "between",
        value: {
          from: this.filterForm.controls.doorFrom.value,
          to: this.filterForm.controls.doorTo.value
        }
      },
      {
        name: "rodzaj_paliwa",
        type: "=",
        value: this.filterForm.controls.fuelType.value
      },
      {
        name: "skrzynia_biegow",
        type: "=",
        value: this.filterForm.controls.gearbox.value
      },
      {
        name: "kolor",
        type: "=",
        value: this.filterForm.controls.colour.value
      },
      {
        name: "powypadkowy",
        type: "=",
        value: this.filterForm.controls.accidentFree.value
      }
    ];
    this.carsService.getfilterCars(filterOptions).subscribe(
      (cars: []) => {
        this.carsChanged.emit(cars);
      },
      err => console.log(err)
    );
  }
}
