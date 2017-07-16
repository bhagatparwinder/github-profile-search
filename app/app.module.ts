import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { KeyService } from './config/config';

@NgModule({
    imports: [BrowserModule, HttpModule ],
    declarations: [ AppComponent, ProfileComponent ],
    bootstrap: [ AppComponent ],
    providers: [KeyService,
                { provide: APP_INITIALIZER, useFactory: (config: KeyService) => () => config.load(), deps: [KeyService], multi: true }
    ], 
})

export class AppModule{};