import {Injectable} from '@angular/core';

import {Metric, AnalyticsImplementation} from './analytics-demo.interface';

@Injectable()
export class AnalyticsService {

  constructor(private impl: AnalyticsImplementation) {
  }

  record(metric: Metric) {
    this.impl.recordEvent(metric);
  }
}
