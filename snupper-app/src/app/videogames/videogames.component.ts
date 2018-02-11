import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  private apiUrl = './assets/videogames.json'
  public videos : any
  public video : any
  public station : any
  public videoById : any
  public cart : any

  constructor(private http: Http) {
    this.loadVideos().subscribe(data => {
      this.videos = data.json().items
      this.station = data.json().station
    })
  }

  public loadVideos(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

  ngOnInit() {
    console.log('ngOnInit')
    console.log(JSON.stringify(this.cart)) 
  }
  
  addToCart(event, id){
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.items.push(this.getItemById(id)[0])
    cart.total += this.getItemById(id)[0].price
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
    return false    
  }

  getItemById(id){
    this.videoById = this.videos.filter(
      video => video.id === id);
    return this.videoById
  }
  

}
