// Créer par Thomas Patenaude Poulin

import { EntreprisesService } from '../entreprises.service';
import { Entreprise } from '../entreprise';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})

export class EntreprisesComponent implements OnInit {

  entreprises: Entreprise[] = []
  constructor(private entreprisesService: EntreprisesService, private Router: Router) {}

  // get observedAttributes()
  ngOnInit(): void {
    this.obtenirEntreprises()
  }
  obtenirEntreprises(): void{
    this.entreprisesService.ObtenirEntreprises().subscribe(donnee => {this.entreprises = donnee;})

  }

  obtenirEntreprise(_id: String) {
    this.Router.navigate(['entreprises-details', _id]);
  }

}
