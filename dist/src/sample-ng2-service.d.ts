import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export declare class SampleNg2Service {
    protected http: Http;
    constructor(http: Http);
    getMessage(): string;
    getWithHttp(url: string): Observable<Response>;
}
