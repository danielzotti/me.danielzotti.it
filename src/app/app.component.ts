import { Component, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ConnectionStatusCheckerService } from './modules/connection-status-checker/connection-status-checker.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'dz-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  isOffline: boolean;

  constructor(private swUpdate: SwUpdate,
              private connectionStatusChecker: ConnectionStatusCheckerService,
              @Inject(DOCUMENT) private document: Document) {
    this.connectionStatusChecker.statusChanged$.subscribe(status => {
      this.isOffline = status == 'offline';

      if(this.isOffline) {
        this.document.querySelector('html').classList.add('is-offline')
      }
      else {
        this.document.querySelector('html').classList.remove('is-offline')
      }
    });
  }

  ngOnInit() {


    if(this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if(confirm('A new version of the website is available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
