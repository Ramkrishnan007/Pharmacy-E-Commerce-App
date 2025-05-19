import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  apiUrl = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) {}

  getProducts(filters?: any): Observable<any[]> {
    let params = new HttpParams();
    if (filters) {
      Object.keys(filters).forEach(key => {
        if (filters[key]) params = params.append(key, filters[key]);
      });
    }
    return this.http.get<any[]>(this.apiUrl, { params });
  }

  getProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}