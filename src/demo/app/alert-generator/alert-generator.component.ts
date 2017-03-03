import {Component, OnInit} from '@angular/core';
import {AlertCenterService} from '../../../alert-center/dist/service/alert-center.service';
import {AlertType} from '../../../alert-center/dist/model/alert-type';
import {Alert} from '../../../alert-center/dist/model/alert';

@Component({
  selector: 'nac-alert-generator',
  template: `
<div class="alert-container">
  <nac-alert-center></nac-alert-center>
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
                <label for="alert-text">Alert text</label>
                <input class="form-control" id="alert-text" type="text" name="alertText" [(ngModel)]="alert.text">
              </div>
              <div class="form-group">
                <label for="strong-text">Strong text</label>
                <input class="form-control" id="strong-text" type="text" name="strongText" [(ngModel)]="alert.textStrong">
              </div>
              <div class="form-group">
                <label for="dismiss-time">Dismiss Time</label>
                <input class="form-control" id="dismiss-time" type="text" name="dismissTime" [(ngModel)]="alert.dismissTime">
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
  alert: Alert = new Alert(AlertType.INFO, 'Test alert.');

  constructor(private alertCenterService: AlertCenterService) {
  }

  ngOnInit() {
  }

  sendAlert() {
    this.alertCenterService.alert(this.alert);
    this.alert = new Alert(this.alert.alertType, this.createTestMessage(), AlertType[this.alert.alertType] + ': ');
  }

  private createTestMessage() {
    const a = this.createRandomNumberBetweenNullAndTentausend();
    const b = this.createRandomNumberBetweenNullAndTentausend();


    return 'The result of new calculation is ' + a + ' + ' + b + ' = ' + (a + b) + '.';
  }

  private createRandomNumberBetweenNullAndTentausend() {
    return Math.round(Math.random() * 10000);
  }

}
