import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/LandingPageComponents/home/home.component';
import { HowWeWorkComponent } from './Components/LandingPageComponents/how-we-work/how-we-work.component';
import { AboutUsComponent } from './Components/LandingPageComponents/about-us/about-us.component';
import { RecipesComponent } from './Components/LandingPageComponents/recipes/recipes.component';
import { TestymonialsComponent } from './Components/LandingPageComponents/testymonials/testymonials.component';
import { ContactUsComponent } from './Components/LandingPageComponents/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowWeWorkComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
