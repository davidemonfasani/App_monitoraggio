import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL} from '../../globalVars';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = API_URL+'User/';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

    const body = { username, password };
    return this.http.post(this.apiUrl+"login", body);
  }

  CheckToken(token: string): Observable<any> {
    const body = { token };
    return this.http.post(this.apiUrl+"checkLogged", body);
  }
}