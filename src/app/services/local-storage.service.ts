import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

interface AlternativeLocalStorage {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private alternativeLocalStorage: AlternativeLocalStorage = {};

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  private get storage() {
    if (this.isBrowser) {
      return localStorage;
    } else {
      return {
        getItem: (key: string) => this.alternativeLocalStorage[key],
        setItem: (key: string, value: string) =>
          (this.alternativeLocalStorage[key] = value),
        removeItem: (key: string) => (this.alternativeLocalStorage[key] = null),
      };
    }
  }

  get(key: string) {
    try {
      return this.storage.getItem(key);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return null;
    }
  }

  set(key: string, value: string) {
    try {
      this.storage.setItem(key, value);
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }

  remove(key: string) {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error('Error removing localStorage:', error);
    }
  }
}
