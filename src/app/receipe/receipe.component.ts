import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.scss']
})
export class ReceipeComponent {
  @Input() data: any


}
