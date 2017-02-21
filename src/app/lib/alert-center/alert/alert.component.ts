import {Component, OnInit, Input} from '@angular/core';
import {Alert} from '../model/alert';
import {AlertType} from '../model/alert-type';

@Component({
  selector: 'nac-alert',
  template: `
    <div class="alert"
        [class.alert-success]="isSuccess()"
        [class.alert-info]="isInfo()"
        [class.alert-warning]="isWarning()"
        [class.alert-danger]="isDanger()">
      <strong>{{alert.textStrong}}</strong><span>{{alert.text}}</span>
    </div>
  `,
  styles: []
})
export class AlertComponent implements OnInit {

  @Input() alert = new Alert(AlertType.INFO, '', '');

  constructor() {
  }

  ngOnInit() {
  }

  isSuccess() {
    return this.alert.alertType === AlertType.SUCCESS;
  }

  isInfo() {
    return this.alert.alertType === AlertType.INFO;
  }

  isWarning() {
    return this.alert.alertType === AlertType.WARNING;
  }

  isDanger() {
    return this.alert.alertType === AlertType.DANGER;
  }

}
