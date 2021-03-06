import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../../services/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar:any = {};
  id:any = null;
  constructor(private lugaresService: LugaresService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    if(this.id != 'new'){
      this.lugaresService.getLugar(this.id)
      .subscribe((lugar) => {
        this.lugar = lugar;
      })
    }
  }

  ngOnInit() {
  }

  guardarLugar(){
    var direccion = `${this.lugar.calle},${this.lugar.ciudad},${this.lugar.pais}`
    this.lugaresService.obtenerGeoData(direccion)
    .subscribe(result => {
      this.lugar.lat = result.json().results[0].geometry.location.lat;
      this.lugar.lng = result.json().results[0].geometry.location.lng;
      if(this.id != 'new'){
        this.lugaresService.editarLugar(this.lugar);
        this.lugar = {};
      }
      else{
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        this.lugar = {};
      }
    })
    
  }
}
