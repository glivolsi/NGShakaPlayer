# Player Interface

```
    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerRef.nativeElement,
      this.videoElement
    );
    const config = {
      controlPanelElements: ['skip'],
      overflowMenuButtons: ['cast'],
      addSeekBar: false,
    };
    ui.getControls();

```
