import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component'; 

import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    MainComponent,
    ErrorComponent,
    BuscadorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'home', component: MainComponent},
      {path: 'products/:type', component: ProductsComponent},
      {path: 'product/:id', component: ProductComponent},
      {path: 'resultado/:result', component: BuscadorComponent},
      {path: 'About', component: AboutComponent}, 
      {path: 'home', component: MainComponent},
      {path: '**', pathMatch: 'full', component: ErrorComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
