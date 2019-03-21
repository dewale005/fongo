import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./materials";
import { ComingsoonComponent } from "./components/comingsoon/comingsoon.component";
import { LandingPageComponent } from "./page/landing-page/landing-page.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { FooterComponent } from "./component/footer/footer.component";
import { DetailPageComponent } from "./page/detail-page/detail-page.component";
import { BarRatingModule } from "ngx-bar-rating";
import { PhonesComponent } from './component/phones/phones.component';
import { RelatedComponent } from './component/related/related.component';
import { PromoComponent } from './component/promo/promo.component';
import { SubcribeComponent } from './component/subcribe/subcribe.component';
import { SellphonesComponent } from './page/sellphones/sellphones.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingsoonComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    DetailPageComponent,
    PhonesComponent,
    RelatedComponent,
    PromoComponent,
    SubcribeComponent,
    SellphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
