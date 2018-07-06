import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = []; //arreglo de artistas
  urlBusqueda:string = "https://api.spotify.com/v1/search"; // endpoint servicio search
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:any = 'Bearer BQB9DSEcm8FsQdVVnlkr0BDYu-5cmz-6d7zh5oMQQNDScJNoVJHRnV421YT0fF3oLHtX2l33yyM9DVImkkawxYmj4xcXnLiHoR5xGeH-wsE9qW50BJymciZRRN-F4nvkTP1_2xdSnYyBqe-SS1cR2cUE';

  constructor(private http:Http) { }

  getArtistas(busqueda:string){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `?q=${ busqueda }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
                  .map( response => {
                    this.artistas = response.json().artists.items;
                    console.log(response.json().artists.items);

                    return response.json().artists.items;
                  })



  }

  getArtista(id:string){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
                  .map( response => {
                    console.log(response.json());
                    return response.json();
                  })

  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `/${ id }/top-tracks?country=CL`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
                  .map( response => {
                    console.log(response.json().tracks);
                    return response.json().tracks;
                  })

  }

}
