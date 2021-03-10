import { Component } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent   {

  constructor(private Gifs:GifsService) { }

  get resultado(){
    return this.Gifs.respuesta;
  }

  
}
