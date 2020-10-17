import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'dz-root',
  templateUrl: 'app.component.html',
  styles: ['app.component.scss']
})
export class AppComponent {
  title = 'danielzotti';

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {

    if(this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if(confirm('New version available. Load New Version?')) {

          window.location.reload();
        }
      });
    }
  }
}
