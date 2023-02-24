import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { MapModule } from './features/map/map.module';
import { ContactModule } from './features/contact/contact.module';
import { LandingPageModule } from './features/landing-page/landing-page.module';
import { ProfileService } from './core/services/profile.service';
import { ProfileResolver } from './core/resolvers/profile.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
    MapModule,
    ContactModule,
    LandingPageModule
  ],
  providers: [
    ProfileService,
    ProfileResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
