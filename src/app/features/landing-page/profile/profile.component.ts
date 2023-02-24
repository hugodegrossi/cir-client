import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  @Input() profile!: Profile

}
