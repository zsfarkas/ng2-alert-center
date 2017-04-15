import {Component, OnInit} from '@angular/core';
import {AlertCenterService} from '../modules';
import {AlertType} from '../modules';
import {Alert} from '../modules';

@Component({
  selector: 'nac-alert-generator',
  template: `
<div class="alert-container" [style.left]="getLeft()" [style.right]="getRight()">
  <nac-alert-center [animation]="animation"></nac-alert-center>
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
              <div class="form-group">
                <label for="strong-text">Strong text (textStrong)</label>
                <input class="form-control" id="strong-text" type="text" name="strongText" [(ngModel)]="alert.textStrong">
              </div>
              <div class="form-group">
                <label for="dismiss-time">Dismiss Time (dismissTime)</label>
                <input class="form-control" id="dismiss-time" type="text" name="dismissTime" [(ngModel)]="alert.dismissTime">
              </div>
              <label>Alert type (AlertType)</label>
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
  alert: Alert = new Alert(AlertType.SUCCESS, AlertGeneratorComponent.createTestMessage(), 'CALCULATION: ');

  animation = 'fancy';
  align = 2;

  constructor(private alertCenterService: AlertCenterService) {
  }

  ngOnInit() {
  }

  sendAlert() {
    this.alertCenterService.alert(this.alert);
    this.alert = new Alert(this.alert.alertType, AlertGeneratorComponent.createTestMessage(), this.alert.textStrong, this.alert.dismissTime);
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

  private static createTestMessage() {
    const a = AlertGeneratorComponent.createRandomNumberBetweenNullAndTentausend();
    const b = AlertGeneratorComponent.createRandomNumberBetweenNullAndTentausend();


    return 'The result of new calculation is ' + a + ' + ' + b + ' = ' + (a + b) + '.';
  }

  private static createRandomNumberBetweenNullAndTentausend() {
    return Math.round(Math.random() * 10000);
  }
}
