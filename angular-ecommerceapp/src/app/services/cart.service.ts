import {Injectable} from '@angular/core';
import {CartItem} from "../common/cart-item";
import {Subject} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity:  Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(cartItem: CartItem) {
    let existingCartItem: CartItem;
    let allreadyExistingInCart = false;
    if (this.cartItems.length > 0) {
      for (let i of this.cartItems) {
        if (cartItem.id === i.id) {
          existingCartItem = i;
          break;
        }
      }
    }
      allreadyExistingInCart = (existingCartItem !== undefined);
      if (allreadyExistingInCart) {
        existingCartItem.quantity++;
      } else {
        this.cartItems.push(cartItem);
      }
      this.calculateTotals();
  }

  calculateTotals() {
    let totalPriceValue=0;
    let totalQuantityValue=0;
    for(let i of this.cartItems){
      totalPriceValue+=i.quantity*i.unitPrice;
      totalQuantityValue+=i.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

  }
}
