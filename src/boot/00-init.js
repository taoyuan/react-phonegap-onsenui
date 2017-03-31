import log from 'loglevel';
import config from 'config';
import FontFaceObserver from 'fontfaceobserver';

export default function () {
  log.setLevel(config.loglevel || 'info');

  // Observe loading of Open Sans (to remove open sans, remove the <link> tag in
  // the index.html file and this observer)
  const observer = new FontFaceObserver('Open Sans', {});

  // When Open Sans is loaded, add a font-family using Open Sans to the body
  observer.load().then(() => {
    document.body.classList.add('fontLoaded');
  }, () => {
    document.body.classList.remove('fontLoaded');
  });
}
