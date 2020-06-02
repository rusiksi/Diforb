import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiforbComponent } from './shared/components/diforb/diforb.component';
import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './shared/components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    DiforbComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
