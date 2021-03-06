import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http'

import { Metric, AnalyticsImplementation } from '../services/analytics-demo.interface'
import { AnalyticsService } from '../services/analytics.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    {
      provide: 'API_URL', 
      useValue: 'http://devserver.com'
    },
    {
      provide: AnalyticsService,
      deps: [ Http, 'API_URL' ],
      useFactory(http: Http, apiUrl: string) {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
            console.log('Sending to: ', apiUrl);
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: []
})
export class AnalyticsDemoModuleModule { }
