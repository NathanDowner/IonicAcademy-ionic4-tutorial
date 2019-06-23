import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  filmId: string;
  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
