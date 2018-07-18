import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing';
import { APP_BASE_HREF } from '@angular/common';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: "list", component: ListBookComponent },
  { path: "create", component: CreateBookComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];
// Angular Material 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthInterceptor } from './user/auth-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBookComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatRadioModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    // Material
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    // Bootstrap
    NgbModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
