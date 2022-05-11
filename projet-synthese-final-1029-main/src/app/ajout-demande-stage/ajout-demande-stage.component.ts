import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeStageService } from '../demande-stage.service';
import { DemandeStage } from '../demande-stages';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajout-demande-stage',
  templateUrl: './ajout-demande-stage.component.html',
  styleUrls: ['./ajout-demande-stage.component.sass']
})
export class AjoutDemandeStageComponent implements OnInit {

  titre = 'Ajouter une demande';

  @Input() demande: DemandeStage = {
    _id: '', title: '', studentName: '', studentPresentation: '',school: '', startDate: new Date, endDate: new Date, program: '',
  stageType: '', hoursPerWeek: 0, additionalInfo: '', published: true, paid: [''], active: true, skills: [''], region: '',
    activitySector: '', city: '', linkToResume: ''
  }

  @Output() majTableau = new EventEmitter

  constructor(
    private demandeStageService: DemandeStageService,
    private router: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

  onSave(demandeAjoutForm: NgForm) {
    if(demandeAjoutForm.valid){
      if(!this.demande._id){
        this.demandeStageService.ajoutDemandeStage(this.demande).subscribe(_ => {this.majTableau.emit()});
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
