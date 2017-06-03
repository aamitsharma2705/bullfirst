import { Component, OnInit , Input, OnChanges} from '@angular/core';
import { pie, arc } from 'd3-shape';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() height = 0;
  @Input() width = 0;
  @Input() selectedIndex: number;
  @Input() data: any[] = [];
  @Input() valProp = 'value';
  @Input() colorProp: string;
  @Input() padding = 10;

  trans: string;
  groups: any[];
  pieChart: any;
  arcOver: any;
  label: any;
  path: any;

  constructor() { }

  ngOnInit() {
    const { width, height, data, valProp, padding, selectedIndex } = this;
    const _width = width - padding / 2;
    const _height = height - padding / 2;
    this.trans = `translate(${_width / 2},${_height / 2})`;

    this.pieChart = pie()
      .sort(null)
      .value((d) => d[valProp]);

    const radius = Math.min(_width, _height) / 2;
    this.path = arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    this.label = arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

    this.arcOver = arc()
    .outerRadius(radius + padding / 3)
    .innerRadius(0);

    this.prepareChartData();

  }
  ngOnChanges(val) {
    this.prepareChartData();
  }

  prepareChartData() {
    const { data, valProp, selectedIndex, pieChart, arcOver, label, path, colorProp } = this;
    if (!pieChart) {
      return;
    }
    const arcs = pieChart(data);
    this.groups = arcs.map((a, i) => {
      const ret = {
          color : data[i][colorProp],
          textTrans : `translate(${label.centroid(a)})`,
          text : data[i][valProp]
        };
      if (i === selectedIndex) {
        ret['d'] = arcOver(a);
        ret['stroke'] = 'white';
        ret['strokeWidth'] = 3;
      } else {
          ret['d'] = path(a);
          ret['stroke'] = 'none';
      };
      return ret;
    });
  }

}
