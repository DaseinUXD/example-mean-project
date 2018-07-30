import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MoviesNewComponent } from "./movies-new/movies-new.component";
import { ReviewsListComponent } from "./reviews-list/reviews-list.component";
import { ReviewsAddComponent } from "./reviews-add/reviews-add.component";

const routes: Routes = [
    {path: 'movie/new', component: MoviesNewComponent},
    {path: 'movie', component: MoviesListComponent},
    {path: 'movie/:id', component: ReviewsListComponent},
    {path: 'movie/:id/review', component: ReviewsAddComponent},

    // { path: 'product', component: ProductsComponent, children: [
    // nested route
    // { path: 'edit/:id', component: ProductsEditComponent },
    // ]},
    // { path: 'product/new', component: ProductsNewComponent },
    {path: '', pathMatch: 'full', component: MoviesListComponent}, // redirects empty url to list component
    {path: '**', redirectTo: '/'}, // redirects any mistyped url to the root
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
