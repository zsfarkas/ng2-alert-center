import { Component, OnInit } from '@angular/core';
import {AlertCenterService} from '../service/alert-center.service';
import {Alert} from '../model/alert';

@Component({
  selector: 'nac-alert-center',
  template: `
    <div class="alert-list">
      <nac-alert *ngFor="let alert of alerts" [alert]="alert"></nac-alert>
    </div>
  `,
  styles: [
    `

    `
  ]
})
export class AlertCenterComponent implements OnInit {
  private alerts: Alert[] = [];

  constructor(private alertCenterService: AlertCenterService) { }

  ngOnInit() {
    this.alertCenterService.alerts.forEach((alert: Alert) => {
      this.alerts.push(alert);
    });
  }

}
