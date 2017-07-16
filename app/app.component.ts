import { GithubService } from './services/github.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [GithubService]
})

export class AppComponent{}