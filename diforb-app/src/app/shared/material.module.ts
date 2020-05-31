import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [

  ],
  exports: [
    MatSliderModule,
    MatSlideToggleModule
  ],
  imports: [
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
})
export class MaterialModule { }