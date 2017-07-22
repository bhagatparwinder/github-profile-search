import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { KeyService } from './../config/config';

@Injectable()
export class GithubService {
	private username: string;
	private client_id: string;
	private client_secret: string;

	constructor(private _http: Http, private config: KeyService) {
		this.username = 'bhagatparwinder';
		this.client_id = config.getKey('client_id');
		this.client_secret = config.getKey('client_secret');
	}

	getUser() {
		return this._http
			.get(
				'http://api.github.com/users/' +
					this.username +
					'?client_id=' +
					this.client_id +
					'&client_secret=' +
					this.client_secret
			)
			.map(res => res.json());
	}

	getRepos() {
		return this._http
			.get(
				'http://api.github.com/users/' +
					this.username +
					'/repos?client_id=' +
					this.client_id +
					'&client_secret=' +
					this.client_secret
			)
			.map(res => res.json());
	}
}
