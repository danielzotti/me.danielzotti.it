import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { VideoprofileComponent } from './components/videoprofile/videoprofile.component';

@NgModule({
  imports: [
    // Angular
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    VideoprofileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
