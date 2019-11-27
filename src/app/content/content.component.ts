import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmGetterService } from '../services/film-getter.service';
import { FilmManagementService } from './film-management.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  providers: [FilmGetterService,FilmManagementService]
})
export class ContentComponent implements OnInit {
  selectedId: number;
  @ViewChild('FilmList', {static: true}) filmListContent: FilmListComponent;

  constructor(private filmGetterService: FilmGetterService,
              private filmManagementService: FilmManagementService) { }

  ngOnChanges(){
    this.selectedId = this.filmListContent.filmSelectedId;
  }

  ngOnInit() {
    this.selectedId = 0;
  }

}
