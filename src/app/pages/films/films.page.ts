import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  films: Observable<any>;

  ngOnInit() {
    this.films = this.api.getFilms();
  }

  openDetails(film) {
    const split = film.url.split('/');
    const filmId = split[split.length - 2];
    // console.log(filmId);
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

  // goToPlanets() {
  //   this.navController.navigateRoot('/tabs/planets');
  //   // this.router.navigateByUrl('/tabs/planets');
  // }

}
