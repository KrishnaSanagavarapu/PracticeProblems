import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: "root"
})
export class EmployeeService {

  private _url:string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
