import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Profile } from "../models/profile.model";
import { Observable } from "rxjs";
import { ProfileService } from "../services/profile.service";


@Injectable({
    providedIn: 'root'
})
export class ProfileResolver implements Resolve<Profile[]> {
    constructor(private profileService: ProfileService) {}

    resolve(): Observable<Profile[]> {
        return this.profileService.getAllProfiles()
    }
    
}