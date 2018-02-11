import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path : '',
    component : VideogamesComponent
  },
  {
    path : 'videogames',
    component : VideogamesComponent
  },
  {
    path : 'movies',
    component : MoviesComponent
  },
  {
    path : 'electronics',
    component : ElectronicsComponent
  },
  {
    path : 'cart',
    component : CartComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    VideogamesComponent,
    ElectronicsComponent,
    CartComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
