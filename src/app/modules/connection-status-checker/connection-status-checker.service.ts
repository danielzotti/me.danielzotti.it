import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusCheckerService {

  private readonly statusChangedSubject: BehaviorSubject<'online' | 'offline'> = new BehaviorSubject<'online' | 'offline'>('online');
  readonly statusChanged$ = this.statusChangedSubject.asObservable();

  status: 'online' | 'offline' = 'online';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {

    if(isPlatformBrowser(platformId)) {
      window.addEventListener('load', () => {
        window.addEventListener('online', this.updateStatus);
        window.addEventListener('offline', this.updateStatus);
      });
    }
  }

  private updateStatus = (event) => {
    this.status = navigator.onLine ? 'online' : 'offline';
    this.statusChangedSubject.next(this.status);
  };

}
