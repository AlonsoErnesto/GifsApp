import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  buscar(params:string){
    this.gifsService.buscarGifs(params);
  }


  get historial(){
  return [...this.gifsService.historial ];

  }

  constructor(private gifsService:GifsService){

  }


}
