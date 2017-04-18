import {Component, Input, OnInit} from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';
import {AlertCenterService} from '../service/alert-center.service';
import {Alert} from '../model/alert';


type ANIMATION_TYPE = 'none' | 'decent'| 'fancy';

@Component({
  selector: 'nac-alert-center',
  template: `
    <div class="alert-list">
      <div *ngFor="let alert of getAlerts()" [@animation]="getAnimation()" >
        <nac-alert [alert]="alert" (dismissed)="remove(alert)"></nac-alert>
      </div>
    </div>
  `,
  animations: [
    trigger('animation', [
      state('none', style({})),
      state('decent', style([{opacity: 1}, {maxHeight: 300}])),
      state('fancy', style([{transform: 'translateX(0)'},{transform: 'translateY(0)'}, {opacity: 1}, {maxHeight: 300}])),
      transition('void => fancy', [
        style({opacity: 0, maxHeight: 0, transform: 'translateY(-100%)'}),
        animate('300ms ease-in-out')
      ]),
      transition('fancy => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(100%)', height: 0, opacity: 0}))
      ]),
      transition('void => decent', [
        style({opacity: 0, maxHeight: 0}),
        animate('300ms ease-in-out')
      ]),
      transition('decent => void', [
        animate('300ms ease-in-out', style({height: 0, opacity: 0}))
      ])
    ])
  ]
})
export class AlertCenterComponent implements OnInit {
  private alerts: Alert[] = [];

  @Input() animation: ANIMATION_TYPE = 'none';

  constructor(private alertCenterService: AlertCenterService) { }

  ngOnInit() {
    this.observeAlerts();
  }

  getAlerts(): Alert[] {
    return this.alerts;
  }

  remove(alert: Alert) {
    if(this.alerts.indexOf(alert) >= 0) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
  }

  getAnimation(): string {
    return this.animation;
  }

  private observeAlerts() {
    this.alertCenterService.alerts.forEach((alert: Alert) => {
      this.alerts.unshift(alert);
    });
  }
}
