import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"employeeform-bd85b","appId":"1:951623656545:web:605d2b2a00fd638ddbf620","storageBucket":"employeeform-bd85b.appspot.com","apiKey":"AIzaSyBvN8jmyARTvXQroUQj8gp7z6KI-VX71r4","authDomain":"employeeform-bd85b.firebaseapp.com","messagingSenderId":"951623656545","measurementId":"G-DYKJPXVEJ4"})), provideFirestore(() => getFirestore())]
};
