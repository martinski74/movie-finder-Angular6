import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from './models/movies'

const apiKey = 'f9e6afddb568c3eac19893218b578cea'
@Injectable()

export class MoviesService {
 path:string = 'https://api.themoviedb.org/3/'
 popular:string = 'discover/movie?sort_by=popularity.desc'
 kids : string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
 drama : string = 'discover/movie?with_genres=18&primary_release_year=2014'
 movie : string = 'movie/'
 theathers = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
 authentication: string = '&api_key='
 movieAuth :string = '?api_key='

  constructor(private http : HttpClient) { }

  getPopular(): Observable<Movies>{
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
  }
  getTheather() : Observable<Movies>{
    return this.http.get<Movies>(`${this.path}${this.theathers}${this.authentication}${apiKey}`)
  }
  getKids() : Observable<Movies>{
    return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`)
  }
  getDrama() : Observable<Movies>{
    return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`)
  }
  getMovie(id){
    return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`)
  }

  findMovie(name){
    return this.http.get("https://api.themoviedb.org/3/search/movie?query="+name + "&api_key=" + apiKey)
  }
}
