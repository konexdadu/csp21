import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  AutoDetails123,
  Read,
  UniqueConstraintError,

} from './auto-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudautoService {
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
    Details: AutoDetails123
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'auto/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(to123: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}auto/Read${to123}`);
  }
  Delete(to123: String): Observable<InsertedSuccess> {
    console.log(`${this.url}auto/Delete${to123}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}auto/Delete${to123}`
    );
  }
  Update(to123: String, Details: AutoDetails123) {
    return this.http.put(`${this.url}auto/Update${to123}`, Details, {
      headers: this.headers,
    });
  }

}