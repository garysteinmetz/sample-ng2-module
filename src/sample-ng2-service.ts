import {Injectable, NgZone} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SampleNg2Service {
  constructor() {
  }
  public getMessage():string {
      return "This is a sample message";
  }
}
