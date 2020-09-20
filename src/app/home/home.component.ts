import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public launchRockets: any;
  constructor(
    private launchService: LaunchService
  ) { }

  ngOnInit(): void {
    this.getRocketLaunches('');
  }

  getSelectFilters(queryObj) {
    this.getRocketLaunches(this.refactorQueryParams(queryObj));
  }

  getRocketLaunches(query) {
    this.launchService.getRocketLaunches(query).subscribe(res => {
      this.launchRockets = res;
    });
  }

  refactorQueryParams(queryObj) {
    let queryString = '';
    Object.entries(queryObj).forEach(([key, val], i) => {
      queryString += `&${key}=${val}${Object.keys(queryObj).length - 1 > i ? '&' : ''}`;
    });
    return queryString;
  }
}
