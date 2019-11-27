import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilmGetterService } from '../../services/film-getter.service';
import { FilmManagementService } from '../film-management.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html'
})
export class FilmListComponent implements OnInit {
  filmSelectedId: number;
  films = [];

  constructor(private filmGetterService: FilmGetterService,
              private filmManagementService: FilmManagementService) {}

  onFilmSelected(selectedId: number){
    this.filmManagementService.filmSelected.emit(selectedId);
  }

  ngOnInit() {
    this.films = this.filmGetterService.getFilms(); 
  }

}
