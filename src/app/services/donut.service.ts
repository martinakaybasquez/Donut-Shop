import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonuts(id:number):Observable<DonutModel>{
    return this.http.get<DonutModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }
}
