// example: product.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ProductService {
  apiUrl = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) {}
  getProducts(filters?: any) {
    let params = new HttpParams();
    if (filters) {
      Object.keys(filters).forEach(key => { params = params.append(key, filters[key]); });
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
  // ... other methods (getProduct, addProduct, etc.)
}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ...
  ]
})
