import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../common/product";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public currentCategoryId: number = 1;
  public isSearchMode: boolean | undefined = false;
  public totalElements = 0;
  public size = 10;
  public number = 1;
  public previousCategoryId = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
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
    if (this.previousCategoryId != this.currentCategoryId) {
      this.number = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    this.productService.getListPaginated(this.currentCategoryId, this.number - 1, this.size).subscribe(this.getResult()
    );
  }

  getResult() {
    return data => {
      console.log("data from result" + JSON.stringify(data));
      this.products = data.content;
      this.number = data.number + 1;
      this.size = data.size;
      this.totalElements = data.totalElements;
    }
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

  updatePageSize(pageSize: number) {
    this.size = pageSize;
    this.number = 1;
    this.listProducts();
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }

}
