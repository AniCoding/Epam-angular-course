import { Component, Optional } from '@angular/core';
import { OptionalService } from '../optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})

export class OptionalComponent {
  constructor(@Optional() public optional?: OptionalService) {}
}


