import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailedDonut, DonutModel } from '../models/donut';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
  }

  getDetailedDonuts(id:number):Observable<DetailedDonut>{
    return this.http.get<DetailedDonut>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }
}
