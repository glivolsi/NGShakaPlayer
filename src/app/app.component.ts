import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('pippo', { static: false }) video;
  timestamp = 0;
  title = 'shaka';
  autoplay = false;
  mute = false;
  vod = 'http://10.32.130.51/vod/mp4:sample.mp4/manifest.mpd';
  live = 'http://10.32.130.51/live/myStream/manifest.mpd';
  //live = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
  dashUrl = this.vod;
  events = ['mouseenter', 'mouseleave'];
  currentTime: number | null = null;

  handleVideoLoaded() {
    console.log('video is loaded');
  }

  handleLoadError(event) {
    console.log(
      `Error ${event.data[1]} loading video ${event.data[0]} Severity:${event.severity} Code:${event.code}`
    );
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

  muteChange() {
    this.mute = !this.mute;
  }
  plus30ButtonHandler() {
    this.currentTime = this.timestamp + 30;
  }
}
