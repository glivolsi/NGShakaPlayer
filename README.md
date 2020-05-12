# Shaka

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

A simple Angular component for [Shaka-Player](https://github.com/google/shaka-player), an open-source JavaScript library for adaptive media. It is highly recommended to check the official shaka documentation first.

## Usage

```html
<shaka-player
  [dashManifestUrl]="dashUrl"
  [autoPlay]="autoplay"
  [triggeredEvents]="events"
  posterUrl="../assets/poster.png"
  (videoLoaded)="handleVideoLoaded()"
  (videoTimeUpdated)="timeUpdated($event)"
  (playerEvent)="playerEventHandler($event)"
></shaka-player>
```

## Events Triggered

The above events are automatically triggered and can be used by (playerEvent)

`pause, play, canplay, playing, waiting, ended, seeked, enterpictureinpicture, leavepictureinpicture

# Video Time Updated

Is triggered every second and output the seconds from the start of the playing media
