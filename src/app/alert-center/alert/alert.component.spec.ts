import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {Component} from '@angular/core';
import {Alert} from '../model/alert';
import {AlertType} from '../model/alert-type';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <nac-alert [alert]="alert"></nac-alert>
  `
})
class TestComponent {
  public alert = new Alert(AlertType.INFO, 'TEST_STRONG', 'TEST_DETAILS');
}

class Page {
  constructor(public fixture: ComponentFixture<TestComponent>) {
    fixture.detectChanges();
  }

  getTestComponent(): TestComponent {
    return this.fixture.componentInstance;
  }

  getAlertComponent(): AlertComponent {
    return this.fixture.debugElement.query(By.directive(AlertComponent)).componentInstance;
  }

  setAlert(alert: Alert) {
    this.getTestComponent().alert = alert;
    this.fixture.detectChanges();
  }

  getTextStrongHTMLElement(): HTMLElement {
    return this.fixture.nativeElement.querySelector('div.alert strong');
  }

  getTextHTMLElement(): HTMLElement {
    return this.fixture.nativeElement.querySelector('div.alert span');
  }

  getAlertHtmlElement(): HTMLElement {
    return this.fixture.nativeElement.querySelector('div.alert');
  }
}

describe('AlertComponent', () => {
  let page: Page;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    page = new Page(TestBed.createComponent(TestComponent));
  });

  it('should create', () => {
    expect(page.getAlertComponent()).toBeTruthy();
  });

  it('should show the text of the alert', () => {
    page.setAlert(new Alert(AlertType.INFO, 'TEXT'));

    expect(page.getTextHTMLElement().textContent).toBe('TEXT');
  });

  it('should show the strong text of the alert', () => {
    page.setAlert(new Alert(AlertType.INFO, 'TEXT', 'TEXT_STRONG'));

    expect(page.getTextStrongHTMLElement().textContent).toBe('TEXT_STRONG');
  });

  it('should have the type class according to the type of the alert', () => {
    page.setAlert(new Alert(AlertType.SUCCESS, '', ''));
    expect(page.getAlertHtmlElement().classList.contains('alert-success')).toBeTruthy('should have alert-success');

    page.setAlert(new Alert(AlertType.INFO, '', ''));
    expect(page.getAlertHtmlElement().classList.contains('alert-info')).toBeTruthy('should have alert-info');

    page.setAlert(new Alert(AlertType.WARNING, '', ''));
    expect(page.getAlertHtmlElement().classList.contains('alert-warning')).toBeTruthy('should have alert-warning');

    page.setAlert(new Alert(AlertType.DANGER, '', ''));
    expect(page.getAlertHtmlElement().classList.contains('alert-danger')).toBeTruthy('should have alert-danger');
  });
});
