import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { KeyService } from './config/config';

@NgModule({
	imports: [BrowserModule, HttpModule, FormsModule],
	declarations: [AppComponent, ProfileComponent],
	bootstrap: [AppComponent],
	providers: [
		KeyService,
		{
			provide: APP_INITIALIZER,
			useFactory: (config: KeyService) => () => config.load(),
			deps: [KeyService],
			multi: true
		}
	]
})
export class AppModule {}
