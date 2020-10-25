import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';
import { RequestsService } from './requests.service';

@NgModule({
  exports: [HttpClientModule],
})
export class HttpModule { }
