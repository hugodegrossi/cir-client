import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ProcedureListComponent } from './procedure-list/procedure-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProfileResolver } from 'src/app/core/resolvers/profile.resolver';



@NgModule({
  declarations: [
    LandingPageComponent,
    ProcedureComponent,
    ProcedureListComponent,
    ProfileComponent,
    ProfileListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent,
    ProcedureComponent,
    ProcedureListComponent,
    ProfileComponent,
    ProfileListComponent
  ],
  providers: [
    ProfileService,
    ProfileResolver
  ]
})
export class LandingPageModule { }
