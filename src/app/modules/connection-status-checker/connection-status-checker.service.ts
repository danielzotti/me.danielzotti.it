import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusCheckerService {

  private readonly statusChangedSubject: Subject<'online' | 'offline'> = new Subject<'online' | 'offline'>();
  readonly statusChanged$ = this.statusChangedSubject.asObservable();

  status: 'online' | 'offline';

  constructor() {
    window.addEventListener('load', () => {
      window.addEventListener('online', this.updateStatus);
      window.addEventListener('offline', this.updateStatus);
    });
  }

  private updateStatus = (event) => {
    this.status = navigator.onLine ? 'online' : 'offline';
    this.statusChangedSubject.next(this.status);
  };

}
