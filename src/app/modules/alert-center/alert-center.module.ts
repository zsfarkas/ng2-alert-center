import {NgModule} from '@angular/core';
import {AlertCenterService} from './service/alert-center.service';
import {AlertCenterComponent} from './alert-center/alert-center.component';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AlertCenterComponent, AlertComponent],
  providers: [AlertCenterService],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [AlertCenterComponent]
})
export class AlertCenterModule {
}
