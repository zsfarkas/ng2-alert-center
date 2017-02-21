import {NgModule} from '@angular/core';
import {AlertCenterService} from './service/alert-center.service';
import {AlertCenterComponent} from './alert-center/alert-center.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [AlertCenterComponent, AlertComponent],
  providers: [AlertCenterService],
  exports: [AlertCenterComponent]
})
export class AlertCenterModule {
}
