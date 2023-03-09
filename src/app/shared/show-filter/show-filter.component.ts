import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-filter',
  templateUrl: './show-filter.component.html',
  styleUrls: ['./show-filter.component.scss']
})
export class ShowFilterComponent {
  @Input() filterTitre!:any ;
  @Input() filterdesc!:any ;

}
