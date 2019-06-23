import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  films: Observable<any>;

  ngOnInit() {
    this.films = this.http.get('https://swapi.co/api/films');
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
