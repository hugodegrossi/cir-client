import { Component, Input } from '@angular/core';
import { Procedure } from 'src/app/core/models/procedure.model';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.sass']
})
export class ProcedureComponent {
  @Input() procedure!: Procedure
}
