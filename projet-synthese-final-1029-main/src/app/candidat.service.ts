// Creer par Rachida Zaoug
// programmé le 2022-04-12
// Ceci est le service qui a été créé pour faire appel à l'api des candidats

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from './candidat'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class CandidatService {

    candidatsUrl = 'https://projet-synthese-api.herokuapp.com/api/2096335/candidate';
  
    constructor(private httpClient: HttpClient) { 

    }

  // l'affichage des informations du candidat
  
    public getCandidats(): Observable<any> {
      return this.httpClient.get(this.candidatsUrl);
    }

    // affichage du detail du candidat
    public getCandidat(_id:number): Observable<any> {
      return this.httpClient.get(`${this.candidatsUrl}/${_id}`);
    }

  
    // Fonction pour l'ajout d'un candidat
    public addCandidat(candidat: object): Observable<object>{
      return this.httpClient.post(`${this.candidatsUrl}`, candidat);
    }
    
    public updateCandidat(_id: number, value: any): Observable<any> {
      return this.httpClient.put(`${this.candidatsUrl}/${_id}`, value);
    }

    public deleteCandidat(_id: number): Observable<any> {
      return this.httpClient.delete(`${this.candidatsUrl}/${_id}`, { responseType: 'text' });
    }
    
  }
