import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  private apiUrl = './assets/electronics.json'
  public electronics : any
  public station : any
  public electronicById : any
  public cart: any 

  constructor(private http: Http) {
    this.cart = JSON.parse(localStorage.getItem('cart'))
    console.log(this.cart)
    this.loadElectronics().subscribe(data => {
      this.electronics = data.json().items
      this.station = data.json().station
    })

  }

  public loadElectronics(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

  ngOnInit() {
    console.log('ngOnInit')
    console.log(this.cart)    
  }

  addToCart(event, id){
    this.cart.items.push(this.getItemById(id)[0])
    this.cart.total += this.getItemById(id)[0].price
    localStorage.setItem('cart', this.cart)
    console.log(this.cart)
    return false
  }

  getItemById(id){
    this.electronicById = this.electronics.filter(
      electronic => electronic.id === id);
    return this.electronicById
  }
}
