import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import {httpTokenInterceptor} from "./services/interceptor/http-token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([httpTokenInterceptor])
    ),
    provideRouter(routes),
    provideClientHydration(),
  ],
};

