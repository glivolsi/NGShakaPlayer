import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShakaPlayerModule } from './ShakaPlayer/shaka-player/shaka-player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShakaPlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
