﻿import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExpCategoryService {
    constructor(private http: Http, @Inject('BASE_URL') private originUrl: string) { }

    getExpCategories() {
        return this.http.get(this.originUrl + 'api/ExpenseSet', { withCredentials: true })
            //Once, we get the response back, it has to get mapped to json
            .map(res => res.json());
    }
}