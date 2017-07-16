import { GithubService } from './../services/github.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent {
    constructor(private _githubService:GithubService){
        this._githubService.getUser().subscribe(user => {
            console.log(user);
        })
    }
}