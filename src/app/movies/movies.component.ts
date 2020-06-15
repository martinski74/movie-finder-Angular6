import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../models/movie';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService : MoviesService) { }
  popular: Object
  theaters : Object
  kids : Array<Movie>
  drama : Array<Movie>
  searchedResult : any
  isSearch : boolean
  
  search(myQuery){
    let value = myQuery['search']
    this.moviesService.findMovie(value)
    .subscribe(data => {
      this.searchedResult = data
      this.isSearch = true
      console.log(this.searchedResult);
      
    })
  }
  ngOnInit() {
    this.moviesService.getPopular()
    .subscribe(data => {
      this.popular = data
      
    })

    this.moviesService.getTheather()
      .subscribe(data => {
        this.theaters = data
        console.log(this.theaters)
      })

      this.moviesService.getKids()
      .subscribe(data => {
        this.kids = data.results
      })

      this.moviesService.getDrama()
      .subscribe(data => {
        this.drama = data.results
      })
  }

}
