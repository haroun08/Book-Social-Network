import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Optional: Alternative way to provide HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provides HttpClient without importing HttpClientModule
    // Add other providers as needed
  ]
})
  .catch(err => console.error(err));
