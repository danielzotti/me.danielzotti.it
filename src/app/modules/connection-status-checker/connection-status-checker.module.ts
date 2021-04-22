import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionStatusCheckerService } from './connection-status-checker.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ConnectionStatusCheckerService]
})
export class ConnectionStatusCheckerModule {
}
