import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

interface Userdata {
  userId: number;
  username: string;
  role: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<Userdata>(
        "http://localhost:5000/api/auth",
        { username: username, password: password },
        httpOptions
      )
      .subscribe(
        data => {
          localStorage.setItem("userData", JSON.stringify(data));
          this.router.navigate(["/kup"]);
        },
        error => {}
      );
  }
}
