import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Procedure } from 'src/app/core/models/procedure.model';

@Component({
  selector: 'app-procedure-list',
  templateUrl: './procedure-list.component.html',
  styleUrls: ['./procedure-list.component.sass']
})
export class ProcedureListComponent {
  constructor(private route: ActivatedRoute) {}

  procedures$!: Observable<Procedure[]>

  ngOnInit(): void {
    this.procedures$ = this.route.data.pipe(
      map(data => data['procedure'])
    )
  }
}
