import { Component, OnDestroy, OnInit } from '@angular/core';
import { DvdsService } from '../services/dvds.service';
import { Dvd } from '../models/dvd.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.scss']
})

export class DvdListComponent implements OnInit, OnDestroy {

  dvds: Dvd[];
  dvdsSubscription: Subscription;

  constructor(private dvdsService: DvdsService, private router: Router) {}

  ngOnInit() {
    this.dvdsSubscription = this.dvdsService.dvdsSubject.subscribe(
      (dvds: Dvd[]) => {
        this.dvds = dvds;
      }
    );
    this.dvdsService.emitDvds();
  }

  onNewDvd() {
    this.router.navigate(['/dvds', 'new']);
  }

  onDeleteDvd(dvd: Dvd) {
    this.dvdsService.removeDvd(dvd);
  }

  onViewDvd(id: number) {
    this.router.navigate(['/dvds', 'view', id]);
  }

  ngOnDestroy() {
    this.dvdsSubscription.unsubscribe();
  }
}
