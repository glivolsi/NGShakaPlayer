import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShakaPlayerModule } from './ShakaPlayer/shaka-player/shaka-player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ShakaPlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
