import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = JSON.parse(localStorage.getItem('cart')).items
  total = JSON.parse(localStorage.getItem('cart')).total
  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('cart')).items
  }

  emptyCart(){
    localStorage.clear();
    return false
  }

  removeItem(event, item){
    this.items = this.items.filter(obj => obj !== item)
    this.total = this.total - item.price
    let cart = { "items": this.items, "total": this.total}
    localStorage.setItem('cart', JSON.stringify(cart))
    return false
  }

}
