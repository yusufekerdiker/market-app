import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoot: ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];
  //   {id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Rog Scar", imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id: 2, name: "Mouse", price: 600, categoryId: 2, description: "Razer Mouse", imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Rog Scar", imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id: 2, name: "Mouse", price: 600, categoryId: 2, description: "Razer Mouse", imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Rog Scar", imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id: 2, name: "Mouse", price: 600, categoryId: 2, description: "Razer Mouse", imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  // ];

  ngOnInit() {
    this.activatedRoot.params.subscribe((params) => {
      this.productService
        .getProducts(params["categoryId"])
        .subscribe((data) => {
          this.products = data;
        });
    });
  }

  addToCart(product: any) {
    this.alertifyService.success(product.name + ' added!');
  }
}
