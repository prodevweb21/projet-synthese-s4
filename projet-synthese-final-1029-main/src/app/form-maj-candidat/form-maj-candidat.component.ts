import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-form-maj-candidat',
  templateUrl: './form-maj-candidat.component.html',
  styleUrls: ['./form-maj-candidat.component.sass']
})
export class FormMajCandidatComponent implements OnInit {

  _id!: number;
  candidat!: Candidat;
  submitted = false;


  constructor(private candidatService: CandidatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.candidat = new Candidat();
    this._id = this.route.snapshot.params['_id'];
    this.candidatService.getCandidat(this._id).subscribe(data => {
      this.candidat = data;
      console.log(data);
    },
      error => console.log(error));
    }

      // permet le update du candidat

    editCandidat() {
      this.candidatService.updateCandidat(this._id, this.candidat).
        subscribe(data => console.log(data), error => console.log(error));
      this.candidat = new Candidat();
  
      this.listesCandidat();
  
    }

    onSubmit() {
      this.submitted = true;
      this.editCandidat();
    }


  listesCandidat() {  
    this.router.navigate(['candidats'])
   }
}
