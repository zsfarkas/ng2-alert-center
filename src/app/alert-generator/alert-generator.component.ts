/* tslint:disable:max-line-length */

import {Component, OnInit} from '@angular/core';
import {AlertCenterService} from '../modules';
import {AlertType} from '../modules';
import {Alert} from '../modules';

@Component({
  selector: 'nac-alert-generator',
  template: `
<div class="alert-container" [style.left]="getLeft()" [style.right]="getRight()">
  <nac-alert-center [animation]="animation" [htmlTextEnabled]="htmlTextEnabled"></nac-alert-center>
</div>
<div class="container">
  <br><br>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1>Create and send an alert</h1>
        </div>
        <div class="panel-body">
            <form>
              <div class="form-group">
                <label for="alert-text">Alert text (text)</label>
                <input class="form-control" id="alert-text" type="text" name="alertText" [(ngModel)]="alert.text">
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label for="strong-text">Strong text (textStrong)</label>
                  <input class="form-control" id="strong-text" type="text" name="strongText" [(ngModel)]="alert.textStrong">
                </div>
                <div class="form-group col-sm-6">
                  <label for="auto-dismiss-time">Auto dismiss time (autoDismissTime)</label>
                  <input class="form-control" id="auto-dismiss-time" type="text" name="autoDismissTime" [(ngModel)]="alert.autoDismissTime">
                </div>
              </div>
              <div class="form-group">
                <label class="radio-inline">
                  <input type="radio" name="alertType" [value]="0" [(ngModel)]="alert.alertType">SUCCESS
                </label>
                <label class="radio-inline">
                  <input type="radio" name="alertType" [value]="1" [(ngModel)]="alert.alertType">INFO
                </label>
                <label class="radio-inline">
                  <input type="radio" name="alertType" [value]="2" [(ngModel)]="alert.alertType">WARNING
                </label>
                <label class="radio-inline">
                  <input type="radio" name="alertType" [value]="3" [(ngModel)]="alert.alertType">DANGER
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input id="dismissable" type="checkbox" name="dismissable" [(ngModel)]="alert.dismissable">Dismissable (dismissable)
                </label>
              </div>
              <hr>
              <label>Animation</label>
              <div class="form-group">
                <label class="radio-inline">
                  <input type="radio" name="animation" [value]="'none'" [(ngModel)]="animation">No animation ('none')
                </label>
                <label class="radio-inline">
                  <input type="radio" name="animation" [value]="'decent'" [(ngModel)]="animation">Decent animation ('decent')
                </label>
                <label class="radio-inline">
                  <input type="radio" name="animation" [value]="'fancy'" [(ngModel)]="animation">Fancy animation ('fancy')
                </label>
              </div>
              <hr>
              <div class="checkbox">
                <label>
                  <input id="htmlTextEnabled" type="checkbox" name="htmlTextEnabled" [(ngModel)]="htmlTextEnabled">Allow to write html into alert text (htmlTextEnabled)
                </label>
              </div>
              <hr>
              <label>Alert center alignment</label>
              <div class="form-group">
                <label class="radio-inline">
                  <input type="radio" name="align" [value]="0" [(ngModel)]="align">Align left
                </label>
                <label class="radio-inline">
                  <input type="radio" name="align" [value]="1" [(ngModel)]="align">Align center
                </label>
                <label class="radio-inline">
                  <input type="radio" name="align" [value]="2" [(ngModel)]="align">Align right
                </label>
              </div>
            </form>
        </div>
        <div class="panel-footer">
            <button class="btn btn-primary" (click)="sendAlert()">Send alert</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
.alert-container {
  position: fixed;
  left: 60%;
  right: 0;
  z-index: 100;
  margin: 20px 20px 20px 20px;
}
` ]
})
export class AlertGeneratorComponent implements OnInit {
  alert: Alert = new Alert (
    AlertType.SUCCESS,
    AlertGeneratorComponent.createTestText(),
    AlertGeneratorComponent.createTestTextStrong(),
    5000
  );

  animation = 'fancy';
  align = 2;
  htmlTextEnabled = false;

  private static createTestText() {
    return 'sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex...';
  }

  private static createTestTextStrong() {
    return 'Lorem ipsum dolor ';
  }

  constructor(private alertCenterService: AlertCenterService) {
  }

  ngOnInit() {
  }

  sendAlert() {
    this.alertCenterService.alert(this.alert);
    this.alert = new Alert (
      this.alert.alertType,
      this.alert.text,
      this.alert.textStrong,
      this.alert.autoDismissTime,
      this.alert.dismissable
    );
  }

  getLeft() {
    switch (this.align) {
      case 0:
        return '0';
      case 1:
        return '20%';
      case 2:
        return '60%';
    }
  }

  getRight() {
    switch (this.align) {
      case 0:
        return '60%';
      case 1:
        return '20%';
      case 2:
        return '0';
    }
  }
}
