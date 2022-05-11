import { Component, OnInit, } from '@angular/core';
import { IdentificationService } from '../identification.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.sass']
})

// J'ai un message d'erreur comme quoi la propriété value n'exite pas sur le type 'string' ts(2339) je l'enleve temporairement.
export class IdentificationComponent implements OnInit {
 nomEtPrenom = this.IdentificationService.obtenirNomEtPrenom()?.value;

  constructor(
    private IdentificationService: IdentificationService
  ) {}

  ngOnInit(): void {
    this.nomEtPrenom;
  }

}
