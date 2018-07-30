import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.css']
})
export class MoviesNewComponent implements OnInit {
    page_title = 'Submit a movie and your review';
    newMovie: Object;
    createErrors: Object;


  constructor(private _httpService: HttpService, private _router: Router) {
      console.log('MoviesNewComponent.constructor')
  }

  ngOnInit() {
      console.log('MoviesNewComponent.ngOnInit');
      this.newMovie = {};

  }

  createMovie(){
      console.log('MoviesNewComponent.createMovie()');
      let createMovieObs = this._httpService.createMovies(this.newMovie);
      createMovieObs.subscribe((data_from_create: any)=>{
          console.log('data_from_create:', data_from_create);
          if (!data_from_create.error){
              this._router.navigate(['movie']);
          }
          else {
              this.createErrors = data_from_create.error
          }

      })

  }

}
