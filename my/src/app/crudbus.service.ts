import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  BusDetails123,
  Read,
  UniqueConstraintError,

} from './bus-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudbusService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:3000/';

  Insert(
    Details: BusDetails123
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'bus/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(to12: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}bus/Read${to12}`);
  }
  Delete(to12: String): Observable<InsertedSuccess> {
    console.log(`${this.url}bus/Delete${to12}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}bus/Delete${to12}`
    );
  }
  Update(to12: String, Details: BusDetails123) {
    return this.http.put(`${this.url}bus/Update${to12}`, Details, {
      headers: this.headers,
    });
  }

}