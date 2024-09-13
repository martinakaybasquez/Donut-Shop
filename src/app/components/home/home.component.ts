import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut';
import { DonutService } from '../../services/donut.service';
import { RouterLink } from '@angular/router';
import { HttpEventType, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  donut:DonutModel = {} as DonutModel;
  constructor(private donutService:DonutService){}

  ngOnInit(){
    this.callDonutApi();
  }

  callDonutApi(){
    this.donutService.getDonuts(id).subscribe((response:DonutModel) => {
      console.log(response);
      this.donut = response;
    })
  }

  // getDonutByIndex(donuts:number){
  //   return http
    
  // }

  // getById(id:number){
  //   return http.get<..>(`https:www.api.com/donuts/${id}`)
  // }

}
