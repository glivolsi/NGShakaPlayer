import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
//import * as shaka from 'shaka-player';
import * as shaka from '../../../../node_modules/shaka-player/dist/shaka-player.ui.js';

import { throwError, fromEvent, Observable, merge } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

//import * as Ui from 'shaka-player.ui'

@Component({
  selector: 'shaka-player',
  templateUrl: './shaka-player.component.html',
  styleUrls: ['./shaka-player.component.scss'],
})
export class ShakaPlayerComponent implements AfterViewInit, OnChanges {
  @ViewChild('videoPlayer') videoElementRef: ElementRef;
  videoElement: HTMLVideoElement;
  player: any;
  @Input() posterUrl: string | null = null;
  @Input() dashManifestUrl: string | null = null;
  @Input() width: string = '854';
  @Input() height: string = '480';
  @Input() autoPlay: boolean = true;
  @Input() triggeredEvents: string[] = [];
  @Output() videoLoaded = new EventEmitter<any>();
  @Output() videoTimeUpdated = new EventEmitter<any>();
  @Output() playerEvent = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.player && changes.dashManifestUrl)
      this.load(changes.dashManifestUrl.currentValue);
  }

  ngAfterViewInit(): void {
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.videoElement = this.videoElementRef.nativeElement;
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      throwError('Browser not supported!');
    }
  }

  private initPlayer() {
    fromEvent(this.videoElement, 'timeupdate')
      .pipe(
        map((x) => {
          return x.srcElement && Math.trunc(x.srcElement['currentTime']);
        }),
        distinctUntilChanged()
      )
      .subscribe((t) => this.videoTimeUpdated.emit(t));

    const events = [
      ...this.triggeredEvents,
      'pause',
      'play',
      'canplay',
      'playing',
      'waiting',
      'ended',
      'seeked',
      'enterpictureinpicture',
      'leavepictureinpicture',
      'error',
    ];

    this.fromEvents(this.videoElement, events)
      .pipe(distinctUntilChanged())
      .subscribe((evt: Event) => {
        this.playerEvent.emit(evt);
      });

    // Create a Player instance.
    this.player = new shaka.Player(this.videoElement);
    // this.evt$ = fromEvent(this.videoElement, events).subscribe((a) => {
    //   console.log(a);
    // });

    // Listen for error events.
    //this.player.addEventListener('error', this.onErrorEvent);
    // this.player.addEventListener('canplay', onReady)
    // this.player.addEventListener('play', onPlay)
    // this.player.addEventListener('waiting', onBuffer)
    // this.player.addEventListener('playing', onBufferEnd)
    // this.player.addEventListener('pause', onPause)
    // this.player.addEventListener('seeked', this.onSeek)
    // this.player.addEventListener('ended', onEnded)
    // this.player.addEventListener('error', onError)
    // this.player.addEventListener('enterpictureinpicture', onEnablePIP)
    // this.player.addEventListener('leavepictureinpicture', this.onDisablePIP)
    this.load(this.dashManifestUrl);
  }

  load(dashManifestUrl) {
    //if (this.player.isloaded) {
    //this.player.detach();
    //}
    this.player
      .load(this.dashManifestUrl)
      .then(() => {
        this.videoLoaded.emit();

        console.log(this.player.getConfiguration());
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
  }

  private onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  private onError(error) {
    // Log the error
    console.error('Error code', error.code, 'object', error);
  }

  fromEvents(video: HTMLVideoElement, events: string[]): Observable<Event> {
    const eventStreams = events.map((ev) => fromEvent(video, ev));
    return merge(...eventStreams);
  }
}
