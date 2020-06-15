import { Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders} from '@angular/core'
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';


const routes : Routes = [
    {path:'', component : MoviesComponent},
    {path : 'movie/:id', component : MovieComponent}
]