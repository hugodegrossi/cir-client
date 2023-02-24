import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact/contact.component';
import { LandingPageComponent } from './features/landing-page/landing-page/landing-page.component';
import { MapComponent } from './features/map/map/map.component';
import { ProfileResolver } from './core/resolvers/profile.resolver';

const routes: Routes = [
  { path: 'map', component: MapComponent},
  { path: 'contact', component: ContactComponent},
  { 
    path: '', 
    component: LandingPageComponent,
    resolve: { profile: ProfileResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
