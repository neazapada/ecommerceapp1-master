import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getProductList(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/api/products?category_id=${categoryId}`)
  }


  listProductCategories() {
    return this.httpClient.get('http://localhost:8080/api/categories');
  }
  searchProducts(keyword: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/products/search?keyword=${keyword}`)
  }
  listProductDetailPage(id:number) {
    return this.httpClient.get(`http://localhost:8080/api/products/${id}`)
  }
  getListPaginated(id:number,page:number,size:number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(`http://localhost:8080/api/products?category_id=${id}&page=${page}&size=${size}`)
  }
}
interface GetResponse {
  content: {
    products: Product[]
  };
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;

}
