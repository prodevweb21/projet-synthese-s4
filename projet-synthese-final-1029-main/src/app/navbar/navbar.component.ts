import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {


 
  constructor( private router: Router ) { }

 
  // Ceci est une fonction qui renvoi au formulaire d ajout de candidat
  addCandidat() {
    this.router.navigate(['ajouter-un-candidat'])
  }

}








