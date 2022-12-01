import { Component } from '@angular/core';
import { MOVIES } from '../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  moviesdata = MOVIES;
  searchText:string='';

  search() {
    if (this.searchText === '' || !this.searchText)
    this.moviesdata = MOVIES;
  else {
    this.moviesdata = MOVIES;
    this.moviesdata = this.moviesdata.filter(fruit => fruit.movieTitle?.startsWith(this.searchText.toLowerCase()));
  }

  }
  reset() {
    this.searchText = '';
    this.moviesdata = MOVIES;
  }

}

