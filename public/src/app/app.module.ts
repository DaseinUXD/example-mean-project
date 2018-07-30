import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import these and put them in the imports array below
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// The App Component from the aqp.component.ts file
import { AppComponent } from './app.component';

// This is a service created to manage http requests (get, post)
//ng generate service http //ng g s http
import { HttpService } from "./http.service";

// ngx-bootstrap https://www.npmjs.com/package/ngx-bootstrap

// Allows the ability to route in Angular
import { AppRoutingModule } from './app-routing.module';
import { MoviesNewComponent } from './movies-new/movies-new.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDeleteComponent } from './movies-delete/movies-delete.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsAddComponent } from './reviews-add/reviews-add.component';


@NgModule({
    declarations: [
        AppComponent,
        MoviesNewComponent,
        MoviesListComponent,
        MoviesDeleteComponent,
        ReviewsListComponent,
        ReviewsAddComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
