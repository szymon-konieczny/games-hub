import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgxsStoreModule } from '@store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    NgxsStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
