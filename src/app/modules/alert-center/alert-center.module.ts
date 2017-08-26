import {NgModule} from '@angular/core';
import {AlertCenterService} from './service/alert-center.service';
import {AlertCenterComponent} from './alert-center/alert-center.component';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AlertCenterComponent, AlertComponent],
  providers: [AlertCenterService],
  imports: [CommonModule],
  exports: [AlertCenterComponent]
})
export class AlertCenterModule {
}
