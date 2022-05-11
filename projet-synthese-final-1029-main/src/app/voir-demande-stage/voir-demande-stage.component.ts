import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeStageService } from '../demande-stage.service';
import { DemandeStage } from '../demande-stages';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-voir-demande-stage',
  templateUrl: './voir-demande-stage.component.html',
  styleUrls: ['./voir-demande-stage.component.sass']
})
export class VoirDemandeStageComponent implements OnInit {

  titre = 'Demande de stage';
  tableauDemandeStages: DemandeStage[] = [];
  ligne = faMinus;

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
    this.getDemande()
  }

  getDemande(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.demandeStageService.getDemande(id)
    .subscribe(demande => this.demande = demande);
  }

  suppDemande(tableauDemandeStages: DemandeStage){
    this.demandeStageService.supprDemandeStage(tableauDemandeStages)
    .subscribe(_ => (this.tableauDemandeStages = this.tableauDemandeStages));
  }

  goBack(): void {
    this.location.back();
  }

}
