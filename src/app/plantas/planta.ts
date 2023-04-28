export class Planta {
  id:number;
  nombre_comun:String;
  nombre_cientifico:String;
  tipo:String;
  altura_maxima:number;
  clima:String;
  sustrato_siembre:String;

  public constructor(
    id:number,
    nombre_comun:String,
    nombre_cientifico:String,
    tipo:String,
    altura_maxima:number,
    clima:String,
    sustrato_siembre:String
    ){
    this.id=id;
    this.nombre_comun=nombre_comun;
    this.altura_maxima=altura_maxima;
    this.clima=clima;
    this.nombre_cientifico=nombre_cientifico;
    this.tipo=tipo;
    this.sustrato_siembre=sustrato_siembre;
  }

}
