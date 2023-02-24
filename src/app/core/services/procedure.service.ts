import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Profile } from '../models/profile.model';
import { environment } from 'src/environments/environment.development';
import { ApiPaths } from '../enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private httpClient: HttpClient) { }


  getAllProfiles(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(`${environment.apiUrl}${ApiPaths.Procedures}`);
  }
}
