# Player Interface

```
    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerRef.nativeElement,
      this.videoElement
    );
    const config = {
      controlPanelElements: ['rewind', 'fast_forward'],
    };
    console.log(ui.getConfiguration());

   ui.getControls();
```
