import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Dvd } from '../models/dvd.model';
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';

@Injectable()
export class DvdsService {

  dvds: Dvd[] = [];
  dvdsSubject = new Subject<Dvd[]>();

  constructor() {
    this.getDvds();
  }

  emitDvds() {
    this.dvdsSubject.next(this.dvds);
  }

  saveDvds() {
    firebase.database().ref('/dvds').set(this.dvds);
  }

  getDvds() {
    firebase.database().ref('/dvds')
      .on('value', (data: DataSnapshot) => {
          this.dvds = data.val() ? data.val() : [];
          this.emitDvds();
        }
      );
  }

  getSingleDvd(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/dvds/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewDvd(newDvd: Dvd) {
    this.dvds.push(newDvd);
    this.saveDvds();
    this.emitDvds();
  }

  removeDvd(dvd: Dvd) {
    if (dvd.photo) {
      const storageRef = firebase.storage().refFromURL(dvd.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo removed!');
        },
        (error) => {
          console.log('Could not remove photo! : ' + error);
        }
      );
    }
    const dvdIndexToRemove = this.dvds.findIndex(
      (dvdEl) => {
        if (dvdEl === dvd) {
          return true;
        }
      }
    );
    this.dvds.splice(dvdIndexToRemove, 1);
    this.saveDvds();
    this.emitDvds();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
