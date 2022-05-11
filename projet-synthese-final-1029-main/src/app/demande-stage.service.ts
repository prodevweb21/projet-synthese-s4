import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemandeStage } from './demande-stages';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {
  demandeStageUrl = 'https://projet-synthese-api.herokuapp.com/api/0335324/internship-request';

  constructor(private http: HttpClient) { }

  getDemandeStages(): Observable<DemandeStage[]> {
    return this.http.get<DemandeStage[]>(this.demandeStageUrl);
  }

  getDemande(_id:string): Observable<DemandeStage> {
    const demandeStage = this.http.get<DemandeStage>(`${this.demandeStageUrl}/${_id}`);
    return demandeStage;
  }

  ajoutDemandeStage(demandeStage: DemandeStage): Observable<DemandeStage> {
    return this.http.post<DemandeStage>(this.demandeStageUrl, demandeStage, httpOptions);
  }

  majDemandeStage(demandeStage: DemandeStage): Observable<DemandeStage> {
    const url = `${this.demandeStageUrl}/${demandeStage._id}`;
    return this.http.put<DemandeStage>(url, demandeStage, httpOptions);
  }

  supprDemandeStage(demandeStage: DemandeStage): Observable<DemandeStage> {
    const url = `${this.demandeStageUrl}/${demandeStage._id}`;
    return this.http.delete<DemandeStage>(url);
  }

}
