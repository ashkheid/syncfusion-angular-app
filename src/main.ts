import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Remove copyright footprints
queueMicrotask(() => {
  document.querySelectorAll('body > div').forEach((div) => {
    if (div.textContent?.includes('Claim your free account')) div.remove();
  });
});
