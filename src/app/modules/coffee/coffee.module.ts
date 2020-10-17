import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DzCoffeeComponent } from './coffee.component';

@NgModule({
    imports: [BrowserModule],
    providers: [],
    declarations: [DzCoffeeComponent],
    exports: [DzCoffeeComponent],
    bootstrap: [DzCoffeeComponent]
})
export class DzCoffeeModule { }
