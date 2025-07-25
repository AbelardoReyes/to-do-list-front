import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { auth } from '../model/auth.model';
import { globalUser } from '../model/user.model';

// Define the Config interface according to your config.json structure


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { 
  }

  login(email: string, password: string): Observable<auth> {
    return this.http.post<auth>(`http://127.0.0.1:8000/api/auth/login`, { email, password });
  }

  me(): Observable<globalUser> {
    return this.http.get<globalUser>(`http://127.0.0.1:8000/api/auth/me`);

  }
}