import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public emitSidenav = new EventEmitter<boolean>();

  constructor() { }

  public toogle(isSidenav: boolean) {
    this.emitSidenav.emit(isSidenav);
  }
}
