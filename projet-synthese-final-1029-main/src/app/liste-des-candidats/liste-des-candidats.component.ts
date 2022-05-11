import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import {Candidat} from '../candidat';
import { Router } from '@angular/router';
import { FicheCandidatComponent } from '../fiche-candidat/fiche-candidat.component';



@Component({
  selector: 'app-liste-des-candidats',
  templateUrl: './liste-des-candidats.component.html',
  styleUrls: ['./liste-des-candidats.component.sass']
})
export class ListeDesCandidatsComponent implements OnInit {


  selectedCandidat?: Candidat;


  // structure du detail
   


    candidats!: Candidat[];
    _id!: number;
    candidat: Candidat = new Candidat();
    name: String = '';
    description: String = '';
    jobTitle: String ='';
    email: String = '';
    phone: String = '';
    address: String = '';
    city: String = '';
    province: String = '';
    postalCode: String = '';



  constructor(private candidatService: CandidatService, private router: Router ) { }

  ngOnInit() {
    this.getCandidats()

    this.candidatService.getCandidats().subscribe(data => {
      console.log(data);
      this.candidats = data;
    })
  }

  candidatDetails(_id: number) {
    this.router.navigate(['candidat', _id]);
    console.log(_id);
  
  }


  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(resultat => this.candidats = resultat);
  }

    addCandidat() {
      this.router.navigate(['ajouter-un-candidat'])
    }

  

}
  


