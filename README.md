# Ng2AlertCenter

Alert center provides an alert service and an alert component, you can include in your Angular 2 project.

## Install

`npm install ng2-alert-center --save`

## Usage

```
@Component({
  template: `
    <!-- Insert the alert center component once in your body /-->
    <nac-alert-center></nac-alert-center>
  `
})
export MyComponent {
  /* Inject the alert service into your component. */
  constructor(private service: AlertCenterService) { }
  
  /* Call this method to send an alert. */
  sendAnAlert() {
    const alert = new Alert(AlertType.INFO, 'Test alert.');
    
    this.service.alert(alert);
  }
}
```
