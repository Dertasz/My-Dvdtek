import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmGetterService } from 'src/app/services/film-getter.service';
import { FilmManagementService } from '../film-management.service';

@Component({
  selector: 'app-film-desc',
  templateUrl: './film-desc.component.html'
})
export class FilmDescComponent implements OnInit {
  id: number;
  selectedFilm: Film;

  constructor(private filmGetterService: FilmGetterService,
              private filmManagementService: FilmManagementService) {
    this.filmManagementService.filmSelected.subscribe(
      (id: number) => {
        this.selectedFilm = this.filmGetterService.getFilm(id);
      }
    );
  }

  ngOnInit() {
    this.selectedFilm = this.filmGetterService.getFilm(1);
  }

}
