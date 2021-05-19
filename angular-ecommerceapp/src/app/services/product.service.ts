import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProductList(): Observable<GetResponse>{
    return this.httpClient.get<GetResponse>("http://localhost:8080/api/products") }
}
interface GetResponse {
  products: {
    products: Product[]
  };
}
