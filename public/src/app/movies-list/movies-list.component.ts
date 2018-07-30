import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
    page_title: 'Movie List';
    movies: Object[];

    constructor(private _httpService: HttpService) {
        console.log('MoviesListComponent.constructor')

    }

    ngOnInit() {
        console.log('MoviesListComponent.ngOnInit');
        this.movies = [];
        let moviesObs = this._httpService.getMovies();
        moviesObs.subscribe(
            (movies_data) => {
                this.movies = movies_data['data'];
            });

    }

}
