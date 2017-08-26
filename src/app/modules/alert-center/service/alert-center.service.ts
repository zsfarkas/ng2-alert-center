import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Alert} from '../model/alert';

@Injectable()
export class AlertCenterService {

  private _alerts = new Subject<Alert>();

  get alerts(): Observable<Alert> {
    return this._alerts;
  }

  constructor() {
  }

  public alert(anAlert: Alert) {
    console.log('sending alert: ' + JSON.stringify(anAlert));
    this._alerts.next(anAlert);
  }

}
