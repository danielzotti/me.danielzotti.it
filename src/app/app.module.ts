import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// APP
import { AppRoutingModule } from './app.routing';

// MODULES
import { DzCoffeeModule } from './modules/coffee/coffee.module';

// CONTAINERS
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

// COMPONENTS
import { SkillComponent } from './components/skill/skill.component';
import { ProjectBoxComponent } from './components/project/project-box.component';
import { InfoComponent } from './components/info/info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    imports: [
        // Angular
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        // HttpModule,
        HttpClientModule,
        CommonModule,

        // App
        AppRoutingModule,

        // Custom
        DzCoffeeModule,

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    declarations: [
        // Containers
        AppComponent,
        HomeComponent,
        // Components
        SkillComponent,
        ProjectBoxComponent,
        InfoComponent,
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
