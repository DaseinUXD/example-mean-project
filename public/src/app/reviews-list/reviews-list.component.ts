import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: 'app-reviews-list',
    templateUrl: './reviews-list.component.html',
    styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {
    page_title: 'Reviews for ';
    movie: Object;
    createErrors: Object;
    movieReviews: Object [];


    constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
        console.log('ReviewsListComponent.constructor')

    }

    ngOnInit() {
        console.log('ReviewsListComponent.constructor');
        this.movieReviews = [];

        this._route.params.subscribe((prms: Params) => {
            let movieObs = this._httpService.getMovie(prms['id']);
            movieObs.subscribe((movie_data) => {
                this.movie = movie_data['data'];
                console.log(this.movie)

            });

        });


    };


    deleteMovie(id) {
        let movieDeleteObs = this._httpService.deleteMovie(id);
        movieDeleteObs.subscribe((movie_delete: any) => {
            if (!movie_delete.error) {
                this._router.navigate(['movie']);
            }
            else {
                this.createErrors = movie_delete.error;
            }
        });

    }

}
