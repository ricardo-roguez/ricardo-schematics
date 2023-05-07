import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { <%= classify(name)%>Model } from '../../models/<%= dasherize(name) %>/<%= dasherize(name) %>.model';

@Injectable()
export class <%= classify(name) %>Service {

    constructor(
        protected http: HttpClient,
        protected <%= camelize(name)%>Model: <%= classify(name)%>Model,
    ) {
        // TODO: Add logic
    }
}
