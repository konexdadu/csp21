import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  login,
  StudentDetails,
  UniqueConstraintError,
} from './student-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
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
    Details: StudentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Signin12/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Signin12/Read${email}`);
  }
  ulogin(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Signin12/ulogin${email}`);
  }

  Delete(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Signin12/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Signin12/Delete${email}`
    );
  }
  Update(email: String, Details: StudentDetails) {
    return this.http.put(`${this.url}Signin12/Update${email}`, Details, {
      headers: this.headers,
    });
  }

  


}