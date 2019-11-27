import { OnInit } from '@angular/core';
import { Film } from '../models/film.model'; 

export class FilmGetterService {  
  filmList: Film[] = [];

  constructor(){
    this.filmList.push({ id: 1, title: "Jurassic Park", year: "1993", description: "International Genetic Technologies, Inc.", director: "Steven Spielberg", mainactor: "Sam Neill", imagePath: "https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png" });
    this.filmList.push({ id: 2, title: "The Terminator", year: "1984", description: "In 1984 Los Angeles, a cyborg assassin...", director: "James Cameron", mainactor: "Arnold Schwarzenegger", imagePath: "https://upload.wikimedia.org/wikipedia/en/b/b9/Terminator-2-judgement-day.jpg" });
  }

  getFilms(){
    return this.filmList;
  }

  getFilm(id: number){
    let liste = this.filmList.filter( obj => {
      return obj.id === id
    });
    return liste[0];
  }

}
