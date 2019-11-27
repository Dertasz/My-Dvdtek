import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmManagementService {

  filmSelected = new EventEmitter<number>();

  constructor() { }
}
