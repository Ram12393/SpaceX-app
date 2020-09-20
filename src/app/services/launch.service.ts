import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(
    private http: HttpClient
  ) { }

  getRocketLaunches(query){
    return this.http.get(`${environment.url}launches?limit=100${query}`);
  }
}
