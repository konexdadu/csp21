import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  ContactusDetails,
  Read,
  UniqueConstraintError,

} from './contactus-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudcontactusService {
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
    Details: ContactusDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'contactus/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(to123: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}contactus/Read${to123}`);
  }
  Delete(to123: String): Observable<InsertedSuccess> {
    console.log(`${this.url}contactus/Delete${to123}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}contactus/Delete${to123}`
    );
  }
  Update(to123: String, Details: ContactusDetails) {
    return this.http.put(`${this.url}contactus/Update${to123}`, Details, {
      headers: this.headers,
    });
  }

}