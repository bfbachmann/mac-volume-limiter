class Volimiter {
  constructor(appName, maxVolume) {
    this.app = Application.currentApplication();
    this.app.includeStandardAdditions = true;
    this.appName = appName;
    this.maxVolume = maxVolume;
  }

  get currentVolume() {
    const { outputVolume } = this.app.getVolumeSettings();
    return outputVolume;
  }

  limitVolume() {
    if (this.currentVolume > this.maxVolume) {
      this.app.beep();
      this.app.setVolume(null, { outputVolume: this.maxVolume });
    }
  }

  showNotification() {
    this.app.displayNotification("", {
      withTitle: this.appName,
      subtitle: `Limiting volume to ${this.maxVolume}%`
    });
  }
}

// Default volume limit is 30%.
const PerfectVolume = new Volimiter("Limited Volume", 30);
PerfectVolume.showNotification();

function idle() {
  PerfectVolume.limitVolume();
  return 0.5;
}
