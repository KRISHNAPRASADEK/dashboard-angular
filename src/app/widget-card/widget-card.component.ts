import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css'],
})
export class WidgetCardComponent {
  // input decorator
  @Input() icon: string = '';
  @Input() desc: string = '';
  @Input() bg: string = '';
  @Input() total: string = '';
}
