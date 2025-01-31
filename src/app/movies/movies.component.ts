import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
   private readonly moviesService = inject(MoviesService);
    movies:Movies[] = [];
    imgPath:string = 'https://image.tmdb.org/t/p/w500';
    getMoviesData():void{
      this.moviesService.getMovies().subscribe({
        next:(res)=>{
          this.movies = res.results;
          console.log(res.results)
        },
        error:(err)=>{
          console.log(err);
        },
      })
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getMoviesData();
    }

}
