import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getdonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }
}
