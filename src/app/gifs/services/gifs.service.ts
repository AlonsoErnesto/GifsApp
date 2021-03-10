import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif, Images } from '../interfaces/Gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')! )|| [];
    this.respuesta = JSON.parse(localStorage.getItem('respuesta')! )|| [];
    
   }

   //variables
  private api_key:string ='61Vzlm0K5qI8EX2SOKjIMVVpNKZiC1sm';
  private servicioUrl:string='https://api.giphy.com/v1/gifs';
  public respuesta:Gif[] = [];
  
  private _historial:string[] = [
    "goku",
    "one puc man"
  ];



  get historial(){
    return [...this._historial];
  }
  


  buscarGifs(query:any){
   
    query = query.trim().toLocaleLowerCase();
    // buscar si ya hay algun dato igual para no agregarlo
    //si historial incluye o existe (query que tiene un valor) hara esto caso contrario eso
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      localStorage.setItem('historial',JSON.stringify(this._historial));
     
    }

    const parametro = new HttpParams()
    .set('api_key',this.api_key)
    .set('limit','10')
    .set('q',query)

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params:parametro})
    .subscribe((res)=>{
      console.log(res.data)
      this.respuesta = res.data;
      localStorage.setItem('respuesta',JSON.stringify(this.respuesta));
    })


    console.log("desde services: ",this._historial);
  }

}
 