import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCPApgjqZtJVTEsy_qYyK8ORX1cY0M1z4E',
      authDomain: 'openclassrooms101.firebaseapp.com',
      databaseURL: 'https://openclassrooms101.firebaseio.com',
      projectId: 'openclassrooms101',
      storageBucket: 'openclassrooms101.appspot.com',
      messagingSenderId: '793526923744',
      appId: '1:793526923744:web:e4be542f2262b72976fb85'
    };
    firebase.initializeApp(config);
  }
}
