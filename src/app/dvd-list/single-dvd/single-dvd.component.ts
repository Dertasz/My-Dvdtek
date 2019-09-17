import { Component, OnInit } from '@angular/core';
import { Dvd } from '../../models/dvd.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DvdsService } from '../../services/dvds.service';

@Component({
  selector: 'app-single-dvd',
  templateUrl: './single-dvd.component.html',
  styleUrls: ['./single-dvd.component.scss']
})
export class SingleDvdComponent implements OnInit {

  dvd: Dvd;

  constructor(private route: ActivatedRoute, private dvdsService: DvdsService,
              private router: Router) {}

  ngOnInit() {
    this.dvd = new Dvd('', '');
    const id = this.route.snapshot.params['id'];
    this.dvdsService.getSingleDvd(+id).then(
      (dvd: Dvd) => {
        this.dvd = dvd;
      }
    );
  }



  onBack() {
    this.router.navigate(['/dvds']);
  }
}
