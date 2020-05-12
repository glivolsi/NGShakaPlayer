import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShakaPlayerComponent } from './shaka-player.component';



@NgModule({
  declarations: [ShakaPlayerComponent],
  imports: [
    CommonModule
  ],
  exports:[ShakaPlayerComponent]
})
export class ShakaPlayerModule { }
