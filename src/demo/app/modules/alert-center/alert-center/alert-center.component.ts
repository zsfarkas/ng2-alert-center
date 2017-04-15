import {Component, OnInit} from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';
import {AlertCenterService} from '../service/alert-center.service';
import {Alert} from '../model/alert';

@Component({
  selector: 'nac-alert-center',
  template: `
    <div class="alert-list">
      <div *ngFor="let alert of getAlerts()" [@flyInOut]="'in'" >
        <nac-alert [alert]="alert" (dismissed)="remove(alert)"></nac-alert>
      </div>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      state('in', style([{transform: 'translateX(0)'}, {opacity: 1}, {maxHeight: 300}])),
      transition(':enter', [
        style({opacity: 0, maxHeight: 0, transform: 'translateY(-100%)'}),
        animate('300ms ease-in-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({transform: 'translateX(100%)', height: 0, opacity: 0}))
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

  getAlerts(): Alert[] {
    return this.alerts;
  }

  remove(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
