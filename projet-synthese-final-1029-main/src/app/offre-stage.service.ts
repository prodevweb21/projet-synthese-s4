// Fait par Émilie Stratford
// Service pour l'appel à l'API des offres de stages
// ************************************************* //

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { InterfaceOffreStage } from './interface-offre-stage'; // Interface
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OffreStageService {
  offreUrl = 'https://projet-synthese-api.herokuapp.com/api/2096210/internship-offer';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getOffresStages(): Observable<InterfaceOffreStage[]> {
    return this.http.get<InterfaceOffreStage[]>(this.offreUrl);
  }

  getOffre(_id:string): Observable<InterfaceOffreStage> {
    const offre = this.http.get<InterfaceOffreStage>(`${this.offreUrl}/${_id}`);
    return offre;
  }

  editOffre(offre: InterfaceOffreStage): Observable<InterfaceOffreStage> {
    const url = `${this.offreUrl}/${offre._id}`;
    return this.http.put<InterfaceOffreStage>(url, offre, httpOptions);
  }

  addOffre(offre: InterfaceOffreStage) : Observable<InterfaceOffreStage> {
    return this.http.post<InterfaceOffreStage>(this.offreUrl, offre, httpOptions);
  }

  deleteOffre(offre: InterfaceOffreStage): Observable<InterfaceOffreStage> {
    const url =`${this.offreUrl}/${offre._id}`;
    return this.http.delete<InterfaceOffreStage>(url);
  }
}

