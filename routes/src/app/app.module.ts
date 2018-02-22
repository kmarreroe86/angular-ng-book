import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import {AppComponent} from './app.component';

const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: 'HomeComponent'},
  {path: 'about', component: 'AboutComponent'},
  {path: 'contact', component: 'ContactComponent'},
  {path: 'contactus', redirectTo: 'contact'},

  // authentication demo
  {path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    // added this for our child module
    //ProductsModule  Pag 245
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
