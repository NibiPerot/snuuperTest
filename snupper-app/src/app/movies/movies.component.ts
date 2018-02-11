import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  private apiUrl = './assets/movies.json'
  public movies : any
  public station : any
  public movieById: any
  public cart: any
  
  constructor(private http: Http) {
    this.cart = JSON.parse(localStorage.getItem('cart'))
    console.log(this.cart)
    this.loadMovies().subscribe(data => {
      this.movies = data.json().items
      this.station = data.json().station
    })
  }

  public loadMovies(): Observable<any>{
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
    this.movieById = this.movies.filter(
      movie => movie.id === id);
    return this.movieById
  }

  showCart(event){
    console.log(this.cart)
    return false
  }

}
