import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MoviesComponent } from './movies/movies.component'
import { MoviesService } from './movies.service'
import { MovieComponent } from './movie/movie.component'
import { RouterModule, Route } from '@angular/router'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MoviesComponent },
      { path: 'movie/:id', component: SelectedMovieComponent }
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
