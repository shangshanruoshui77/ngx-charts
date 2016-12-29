import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ColorHelper } from '../common/color.helper';

@Component({
  selector: 'g[ngx-charts-gauge-arc]',
  template: `
    <svg:g ngx-charts-pie-arc
        class="background-arc"
        [startAngle]="0"
        [endAngle]="backgroundArc.endAngle"
        [innerRadius]="backgroundArc.innerRadius"
        [outerRadius]="backgroundArc.outerRadius"
        [cornerRadius]="cornerRadius"
        [data]="backgroundArc.data"
        [animate]="false"
        [pointerEvents]="false">
    </svg:g>
    <svg:g ngx-charts-pie-arc
        [startAngle]="0"
        [endAngle]="valueArc.endAngle"
        [innerRadius]="valueArc.innerRadius"
        [outerRadius]="valueArc.outerRadius"
        [cornerRadius]="cornerRadius"
        [fill]="colors.getColor(valueArc.data.value)"
        [data]="valueArc.data"
        [animate]="true"
        [isActive]="isActive"
        (select)="select.emit($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)" >
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaugeArcComponent {

  @Input() backgroundArc: any;
  @Input() valueArc: any;
  @Input() cornerRadius: any;
  @Input() colors: ColorHelper;
  @Input() isActive: boolean = false;

  @Output() select = new EventEmitter();
  @Output() activate = new EventEmitter();
  @Output() deactivate = new EventEmitter();
}
