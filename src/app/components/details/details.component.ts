import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  donutResult:DonutModel = {} as DonutModel;
  constructor(private activatedRoute:ActivatedRoute, private donutService:DonutService){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id:number = Number(params.get("id"));
      console.log(id);
      // this.donutResult = this.donutService.getdonuts()
    })
  }
}
      