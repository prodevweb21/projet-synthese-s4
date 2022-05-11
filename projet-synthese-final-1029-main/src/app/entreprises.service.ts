
// Creer par Thomas Patenaude Poulin
// Ceci est le service qui a été créé pour faire appel à l'api des candidats

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from './entreprise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {
  URL = 'https://projet-synthese-api.herokuapp.com/api/2096335/enterprise';
  constructor(private http: HttpClient) { }

  ObtenirEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.URL);
  }

  ObtenirEntreprise(_id:number): Observable<any> {
      return this.http.get<Entreprise>(`${this.URL}/${_id}`);
    }

  AjoutEntreprise(Entreprise: String) : Observable<Entreprise> {
    return this.http.post<Entreprise>(this.URL, Entreprise, httpOptions);
  }

  public supprimerEntreprise(_id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${_id}`, { responseType: 'text' });
  }
}
