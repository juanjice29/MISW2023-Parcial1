/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantasListComponent } from './plantas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { faker } from '@faker-js/faker';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasListComponent ],
      providers:[PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    for(let i=0;i<3;i++){
      const planta=new Planta(
        faker.datatype.number(),
        faker.random.alpha(10),
        faker.random.alpha(10),
        faker.helpers.arrayElement(Object.values(["Exterior","Interior"])),
        faker.datatype.number(),
        faker.random.alpha(10),
        faker.random.alpha(10)
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 1 <thead> element', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });
  it('should have 3 <tr> element in tbody', () => {
    expect(debug.queryAll(By.css('tr.planta'))).toHaveSize(3)
  });
  it('should have 4 thead.th', () => {
    expect(debug.queryAll(By.css('thead th'))).toHaveSize(4)
  }
  );

  it('should have td tag with the planta.nombre_comun', () => {
    debug.queryAll(By.css('.nombre_comun')).forEach((elem, i)=>{
      expect(elem.nativeElement.textContent).toContain(component.plantas[i].nombre_comun)
    });
  });
  it('should have td tag with the planta.nombre_comun', () => {
    debug.queryAll(By.css('.tipo')).forEach((elem, i)=>{
      expect(elem.nativeElement.textContent).toContain(component.plantas[i].tipo)
    });
  });
  it('should have td tag with the planta.nombre_comun', () => {
    debug.queryAll(By.css('.clima')).forEach((elem, i)=>{
      expect(elem.nativeElement.textContent).toContain(component.plantas[i].clima)
    });
  });

});
