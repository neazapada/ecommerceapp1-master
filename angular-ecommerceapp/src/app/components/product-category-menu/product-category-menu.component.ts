import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.scss']
})
export class ProductCategoryMenuComponent implements OnInit {
  public productCategories;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }
  listProductCategories(){
    this.productService.listProductCategories().subscribe(
      data =>{
        this.productCategories = data;
      }
    )
  }
}
