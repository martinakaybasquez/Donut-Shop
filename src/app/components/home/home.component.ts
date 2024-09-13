import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
    this.donutService.getdonuts().subscribe((response:DonutModel) => {
      console.log(response);
      this.donut = response;
    })
  }
}
