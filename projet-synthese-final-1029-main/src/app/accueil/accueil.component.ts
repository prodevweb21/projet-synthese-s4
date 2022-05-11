// Créer par Thomas Patenaude Poulin

import { Component, OnInit } from '@angular/core';

// Service

import { IdentificationService } from '../identification.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})

export class AccueilComponent implements OnInit {
nomEtPrenom: string = '';

  ajoutNomEtPrenom(nomEtPrenom:string){
this.identificationService.ajoutNomEtPrenom(nomEtPrenom)
  };
  getValue(val:string){
    this.nomEtPrenom = val;
  }

  constructor(
    private identificationService : IdentificationService
  ) { }

  ngOnInit(): void {

  }

}
