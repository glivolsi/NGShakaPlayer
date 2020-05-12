import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  timestamp = 0;
  title = 'shaka';
  autoplay = true;
  vod = 'http://10.32.130.51/vod/mp4:sample.mp4/manifest.mpd';
  live = 'http://10.32.130.51/live/myStream/manifest.mpd';
  //live = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
  dashUrl = this.vod;
  events = ['mouseenter', 'mouseleave'];
  handleVideoLoaded() {
    console.log('video is loaded');
  }

  timeUpdated(t: number) {
    this.timestamp = t;
  }

  playerEventHandler(event) {
    console.log(event);
  }

  liveButtonClick() {
    this.dashUrl = this.live;
  }

  vodButtonClick() {
    this.dashUrl = this.vod;
  }
  autoplayChange() {
    this.autoplay = !this.autoplay;
  }
}
