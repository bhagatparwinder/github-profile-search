import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KeyService {

    private keyData:Object;

    constructor(private _http: Http){

    }

    load(){
        return new Promise((resolve, reject)  => {
            this._http.get('../app/config/keys.json').map(res => res.json()).subscribe((key_data) => {
                this.keyData = key_data;
                resolve(true);
            })
        });
    }

    getKey(key: any){
        return this.keyData[key];
    }

}