import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { ElectronicsComponent } from './electronics/electronics.component';

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
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    VideogamesComponent,
    ElectronicsComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
