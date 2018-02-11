import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  data : any
  items = []
  total = 0
  constructor(private http: Http, private router: Router) {
    this.http.request('./assets/videogames.json')
    .subscribe((res: Response) => {
      this.data = res.json()
    });
  }
  
  ngOnInit(){
  }

  addToCart(event, item){
    this.items.push(item)
    this.total += item.price
    return false
  }

  nextStation(event){
    let cart = { "items": this.items, "total": this.total}
    localStorage.setItem('cart', JSON.stringify(cart))
    this.router.navigateByUrl('/movies')
    return false
  }

}
