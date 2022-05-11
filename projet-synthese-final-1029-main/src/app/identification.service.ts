import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {
nomEtPrenom: string = '';
key: string = "utilisateur";
private useLocalStorage<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

private getKeyFromLocalStorage<T = unknown>(key: string): T | null {
  if (window.localStorage.getItem(key)) {
    return JSON.parse(window.localStorage.getItem(key)!) as T;
  }

  return null;
}
ajoutNomEtPrenom(nomEtPrenom: string){
  this.nomEtPrenom = nomEtPrenom
  this.useLocalStorage(this.key, { value: this.nomEtPrenom })
}

obtenirNomEtPrenom(): any{
  return this.getKeyFromLocalStorage(this.key);
}


  constructor() { }
}
