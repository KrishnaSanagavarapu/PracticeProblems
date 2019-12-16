import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpClientModule
} from "@angular/common/http";
import { IEmployee } from "./employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this._url);
  }
}
