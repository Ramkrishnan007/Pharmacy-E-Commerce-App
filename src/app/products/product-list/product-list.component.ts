import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categories = ['Pain Relief', 'Antibiotics', 'Diabetes', 'Vitamins', 'Cough & Cold'];
  selectedCategory = '';
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const filters: any = {};
    if (this.searchTerm) filters.search = this.searchTerm;
    if (this.selectedCategory) filters.category = this.selectedCategory;
    this.productService.getProducts(filters).subscribe((res: any[]) => {
      this.products = res;
    });
  }

  onSearch(event: any): void {
    this.searchTerm = event.target.value;
    this.loadProducts();
  }

  onFilter(): void {
    this.loadProducts();
  }
}
