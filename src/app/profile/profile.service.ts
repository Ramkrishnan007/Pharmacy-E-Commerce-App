import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/me`, data);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, { currentPassword, newPassword });
  }
}