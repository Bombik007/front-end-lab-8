import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {
  storage = window.localStorage;

  set(key : string, val : any) : void {
    this
      .storage
      .setItem(key, JSON.stringify(val));
  }

  get(key : string) : any {
    return(this.storage.getItem(key))
      ? JSON.parse(this.storage.getItem(key))
      : this
        .storage
        .getItem(key);
  }
}
