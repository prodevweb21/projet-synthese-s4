import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeStageService } from '../demande-stage.service';
import { DemandeStage } from '../demande-stages';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modif-demande-stage',
  templateUrl: './modif-demande-stage.component.html',
  styleUrls: ['./modif-demande-stage.component.sass']
})
export class ModifDemandeStageComponent implements OnInit {

  titre = 'Demande de stage';

  @Input() demande: DemandeStage = {
    _id: '', title: '', studentName: '', studentPresentation: '',school: '', startDate: new Date, endDate: new Date, program: '',
  stageType: '', hoursPerWeek: 0, additionalInfo: '', published: true, paid: [''], active: true, skills: [''], region: '',
    activitySector: '', city: '', linkToResume: ''
  }
  @Output() majTableau = new EventEmitter

  constructor(
    private demandeStageService: DemandeStageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDemande();
  }

  getDemande(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.demandeStageService.getDemande(id)
    .subscribe(demande => this.demande = demande);
  } 
  
  onSave(offreForm: NgForm){
    if(offreForm.valid){
      if(!this.demande._id){
        this.demandeStageService.majDemandeStage(this.demande).subscribe();
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
