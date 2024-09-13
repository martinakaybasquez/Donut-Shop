import { Component } from '@angular/core';
import { DetailedDonut, DonutModel, Result } from '../../models/donut';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { popResultSelector } from 'rxjs/internal/util/args';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  detailedDonut:DetailedDonut = {} as DetailedDonut;
  results:Result = {} as Result;

  constructor(private activatedRoute:ActivatedRoute, private donutService:DonutService){}

  ngOnInit(){
    this.callDetailedDonutApi();
  }

  callDetailedDonutApi(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id:number = Number(params.get("id"));
      console.log(id);

      this.donutService.getDetailedDonuts(id).subscribe((response:DetailedDonut) => {
        this.detailedDonut = response;
      })
    })
  }

  callDonutMatch(){
    this.donutService.getDonuts().subscribe((response:DonutModel) => {
      response.results.forEach(donut => {
        if (donut.name === this.detailedDonut.name){
          this.results = donut;
        }
      })
      console.log(response);

    })
  }
}

