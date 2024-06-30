import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
// import { Paginator } from 'primeng/paginator';
// import { MatPaginatorModule } from '@angular/material/paginator';

//http://localhost:3000/clothes
//https://e-commerce-website-kkmb.onrender.com/clothes

import { CommonModule } from '@angular/common';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule,
    PaginatorModule,
    EditPopupComponent,
    ButtonModule,
  ],
  // imports: [ProductComponent, CommonModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  @ViewChild('paginator') paginator: Paginator | undefined;

  // products: Products[]=[];
  products: Product[] = [];
  totalRecords: number = 0;
  rows: number = 0;

  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;

  toggleEditPopup(product: Product) {
    this.selectedProduct = product;
    this.displayEditPopup = true;
  }
  toggleDeletePopup(product: Product) {
    if (!product.id) {
      return;
    }
    this.deleteProduct(product.id);
  }
  toggleAddPopup() {
    this.displayAddPopup = true;
  }

  selectedProduct: Product = {
    id: 0,
    name: '',
    image: '',
    price: '',
    rating: 0,
  };
  onConfirmEdit(product: Product) {
    if (!this.selectedProduct.id) {
      return;
    }

    this.editProduct(product, this.selectedProduct.id);
    this.displayEditPopup = false;
  }
  onConfirmAdd(product: Product) {
    this.addProduct(product);
    this.displayAddPopup = false;
  }

  onProductOutPut(product: Product) {
    console.log(product, 'OutPut');
  }
  onPageChange(event: any) {
    this.fetchProduct(event.page, event.rows);
  }
  resetPaginator() {
    this.paginator?.changePage(0);
  }
  fetchProduct(page: number, perPage: number) {
    this.productsService
      .getProducts('/clothes', { page, perPage })
      .subscribe({
        next: (data: Products) => {
          this.products = data.items;
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  editProduct(product: Product, id: number) {
    this.productsService
      .editProduct(`/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProduct(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  deleteProduct(id: number) {
    this.productsService
      .deleteProduct(`/clothes/${id}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProduct(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  addProduct(product: Product) {
    this.productsService
      .addProduct(`/clothes`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProduct(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }


  ngOnInit() {
    this.fetchProduct(0, this.rows);
  }
}
