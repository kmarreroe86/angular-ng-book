import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';


import {AppComponent} from './app.component';
import {DemoFormSkuComponentComponent} from './demo-form-sku-component/demo-form-sku-component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';

const routes: Routes = []
/*const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full' },
  { path: 'sku-builder', component: DemoFormSkuWithBuilderComponent, pathMatch: 'full' },
  { path: 'validations-explicit', component: DemoFormWithValidationsExplicitComponent, pathMatch: 'full'},
  { path: 'validations-shorthand', component: DemoFormWithValidationsShorthandComponent, pathMatch: 'full'},
  { path: 'custom-validation', component: DemoFormWithCustomValidationComponent, pathMatch: 'full'},
  { path: 'events', component: DemoFormWithEventsComponent, pathMatch: 'full'},
  { path: 'ng-model', component: DemoFormNgModelComponent, pathMatch: 'full'}
];*/

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponentComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
