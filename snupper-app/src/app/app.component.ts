import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiUrl = './assets/cart.json'
  cart:any
  constructor(private http: Http){
    let LocalStorage = localStorage.getItem('cart')
    LocalStorage == "undefined" || LocalStorage == undefined 
    ? LocalStorage = '{"items" : [],"total" : 0}'
    : LocalStorage
    console.log(LocalStorage)
    localStorage.setItem('cart', LocalStorage)
    console.log(JSON.parse(LocalStorage))
  }

  // public loadCart(): Observable<any>{
  //   return this.http.get(this.apiUrl)
  // }

}
