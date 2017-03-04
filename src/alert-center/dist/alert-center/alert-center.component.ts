import {Component, OnInit, trigger, state, transition, style, animate} from '@angular/core';
import {AlertCenterService} from '../service/alert-center.service';
import {Alert} from '../model/alert';

@Component({
  selector: 'nac-alert-center',
  template: `
    <div class="alert-list">
      <nac-alert *ngFor="let alert of alerts" [alert]="alert" (dismissed)="remove(alert)"></nac-alert>
      <!--nac-alert *ngFor="let alert of alerts" [@inOut] [alert]="alert" (dismissed)="remove(alert)"></nac-alert-->
    </div>
  `,
  animations: [
    trigger('inOut', [
      //state('in', style({transform: 'scale(1.0)'})),
      transition('void => *', [
        animate(500, style({transform: 'scale(1.0)'}))
      ]),
      transition('* => void', [
        animate(500, style({transform: 'scale(0.0)'}))
      ])
    ])
  ]
})
export class AlertCenterComponent implements OnInit {
  private alerts: Alert[] = [];

  constructor(private alertCenterService: AlertCenterService) { }

  ngOnInit() {
    this.alertCenterService.alerts.forEach((alert: Alert) => {
      this.alerts.unshift(alert);
    });
  }

  remove(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
