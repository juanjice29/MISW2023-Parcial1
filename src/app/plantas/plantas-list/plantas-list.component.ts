import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas:Array<Planta>=[];

  constructor(private plantaService:PlantaService) { }
  getPlantas():void{
    this.plantaService.getPlantas().subscribe((elem)=>{
      this.plantas=elem;
    })
  }
  ngOnInit() {
    this.getPlantas();
  }

}
