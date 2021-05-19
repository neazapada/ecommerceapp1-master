import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
public products;
  constructor(private productService:ProductService) { }

  ngOnInit() {this.listProducts();
  }
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    );
  }

}
