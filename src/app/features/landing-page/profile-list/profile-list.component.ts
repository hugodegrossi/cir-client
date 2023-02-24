import { Component } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';
import { OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.sass']
})
export class ProfileListComponent implements OnInit{
    constructor(private route: ActivatedRoute) {}

    profiles$!: Observable<Profile[]>

    ngOnInit(): void {
      this.profiles$ = this.route.data.pipe(
        map(data => data['profile'])
      )
    }
}
