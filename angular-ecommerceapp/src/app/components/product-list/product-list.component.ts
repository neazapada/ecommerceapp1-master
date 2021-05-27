import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products;
  public currentCategoryId: number;
  public isSearchMode: boolean | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.handleProducts());
    this.handleProducts()
  }

  listProducts() {
    const hasCategoryId = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      // @ts-ignore
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    );
  }

  searchProductsByName() {
    const keyword = this.route.snapshot.paramMap.get('keyword');
    if (keyword != null) {
      this.productService.searchProducts(keyword).subscribe(
        data => {
          console.log(data);
          this.products = data;
        }
      );
    }
  }

  handleProducts() {
    this.isSearchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.isSearchMode) {
      this.searchProductsByName();
    } else {
      this.listProducts();
    }
  }

}
