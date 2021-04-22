import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ConnectionStatusCheckerService } from './modules/connection-status-checker/connection-status-checker.service';

@Component({
  selector: 'dz-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'danielzotti';

  isOffline: boolean;

  constructor(private swUpdate: SwUpdate, private connectionStatusChecker: ConnectionStatusCheckerService) {
    this.connectionStatusChecker.statusChanged$.subscribe(status => {
      this.isOffline = status == 'offline';
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
