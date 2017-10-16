import {HttpModule} from '@angular/http'
import {NgModule} from '@angular/core'
import {SampleNg2Service} from './sample-ng2-service'

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    SampleNg2Service
  ]
})
export class SampleNg2Module {
}
