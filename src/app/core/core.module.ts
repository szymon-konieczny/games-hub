import { NgModule } from '@angular/core';

import { HttpModule } from './http/http.module';

@NgModule({
  exports: [HttpModule],
})
export class CoreModule { }
