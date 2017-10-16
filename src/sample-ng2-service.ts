import {Http, Response} from '@angular/http'
import {Injectable, NgZone} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SampleNg2Service {
  constructor(protected http:Http) {
  }
  public getMessage():string {
    return "This is a sample message";
  }
  public getWithHttp(url:string):Observable<Response> {
    return this.http.get(url);
  }
}
