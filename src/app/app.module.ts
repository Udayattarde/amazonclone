import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { LoginComponent } from './Pages/login/login.component';
import { BannerComponent } from './Components/banner/banner.component';
import { HomeComponent } from './Pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './Components/products/products.component';
import { CheckoutproductsComponent } from './components/checkoutproducts/checkoutproducts.component';
import { CheckoutsubtotalComponent } from './components/checkoutsubtotal/checkoutsubtotal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from './Config/firebase.config';
import {  AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutproductsComponent,
    CheckoutsubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
