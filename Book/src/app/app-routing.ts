import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
const appRoutes: Routes = [
    { path: 'create', component: CreateBookComponent },
    { path: 'list', component: ListBookComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'edit/:postId', component: ListDetailComponent },
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}