import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) {
    }

    getMovies() {
        return this._http.get('/movies');
    }

    getMovie(id) {
        return this._http.get(`movies/${id}`)
    }

    createMovies(movie: Object) {
        return this._http.post('/movies', movie)
    }

    deleteMovie(id) {
        return this._http.delete(`/movies/${id}`)
    }
}
