import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data:any 
  items = JSON.parse(localStorage.getItem('cart')).items
  total = JSON.parse(localStorage.getItem('cart')).total
  

  constructor(private http: Http, private router: Router) {
    this.http.request('./assets/movies.json')
    .subscribe((res: Response) => {
      this.data = res.json()
    });
  }

  ngOnInit() {
  }

  addToCart(event, item){
    this.items.push(item)
    this.total += item.price
    return false
  }

  nextStation(event){
    let cart = { "items": this.items, "total": this.total}
    localStorage.setItem('cart', JSON.stringify(cart))
    this.router.navigateByUrl('/electronics');
    return false
  }

}
