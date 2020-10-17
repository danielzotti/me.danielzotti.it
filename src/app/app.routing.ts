import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
    // { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes /*, { enableTracing: true }*/, {
    initialNavigation: 'enabled'
})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
