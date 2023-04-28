import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { count, filter } from 'rxjs';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas:Array<Planta>=[];
  totalPlantasInterior!:number;
  totalPlantasExterior!:number;

  constructor(private plantaService:PlantaService) { }
  getPlantas():void{
    this.plantaService.getPlantas().subscribe((elem)=>{
      this.plantas=elem;
    })
  }
  getReportePlantas(){
    this.plantaService.getPlantas().subscribe((elem)=>{
      this.totalPlantasExterior=elem.filter((planta:Planta)=>planta.tipo=="Exterior").length
      this.totalPlantasInterior=elem.filter((planta:Planta)=>planta.tipo=="Interior").length
    })
  }
  ngOnInit() {
    this.getPlantas();
    this.getReportePlantas();
  }

}
