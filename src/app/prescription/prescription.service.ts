import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PrescriptionService {
  apiUrl = 'http://localhost:5000/api/prescriptions';

  constructor(private http: HttpClient) {}

  uploadPrescription(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiUrl, formData);
  }

  getUserPrescriptions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatePrescriptionStatus(id: string, status: string, notes: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { status, notes });
  }
}