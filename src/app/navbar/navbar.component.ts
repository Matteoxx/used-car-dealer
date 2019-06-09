import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  userData = {};

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  }

  onLogout() {
    this.userData = {};
    localStorage.removeItem("userData");
    this.router.navigate(["/kup"]);
  }

  ngDoCheck(): void {
    let userdata = JSON.parse(localStorage.getItem("userData"));
    if (userdata) {
      this.userData = userdata;
    } else {
      this.userData = "";
    }
  }
}
