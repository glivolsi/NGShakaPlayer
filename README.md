# Angular Shaka Player

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
```javascript
  autoplay = true;
  dashUrl = 'http://dash_server_ip/vod/mp4:sample.mp4/manifest.mpd';
  events = ['mouseenter', 'mouseleave'];
```
## Events Triggered

The above events are automatically triggered and can be fired by (playerEvent)
```  
pause,play,canplay,playing,waiting,ended,seeked,enterpictureinpicture,leavepictureinpicture
```

## (videoTimeUpdated) Event
Is triggered every second and return the seconds from the start of the playing media.
