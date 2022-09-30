import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getAllValuesFromStatement(): Observable<any>{
    return this.http.get('http://localhost:8000/statement')
  }

  insertNewRecord(tableNum: number, lastName: string, firstName: string, amount: number, comment: string):Observable<any>{
    return this.http.post('http://localhost:8000/statement', {tableNum, lastName, firstName, amount, comment})
  }

  changeAmount( tableNum: number, amount: number): Observable<any> {
    return this.http.post('http://localhost:8000/changeAmount', {tableNum, amount})
  }

  editRecord(tableNum: number, lastName: string, firstName: string, amount: number, comment: string) {
    return this.http.post('http://localhost:8000/editStatement', {tableNum, lastName, firstName, amount, comment})
  }
}
