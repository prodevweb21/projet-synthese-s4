import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-form-ajout-candidat',
  templateUrl: './form-ajout-candidat.component.html',
  styleUrls: ['./form-ajout-candidat.component.sass']
})
export class FormAjoutCandidatComponent implements OnInit {

  

  // panneau de details
  candidat: Candidat = new Candidat();

  submitted = false;



  constructor(private candidatService: CandidatService, private router: Router) { }

  ngOnInit() {}

  // panneau details
  newCandidat(): void {
    this.submitted = false;
    this.candidat = new Candidat();
    }

    
    save() {
      this.candidatService.addCandidat(this.candidat)
        .subscribe(data => console.log(data), error => console.log(error));
      this.candidat = new Candidat();
      this.listesCandidat();
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }


  listesCandidat() {  
    this.router.navigate(['candidats'])
   }


}
