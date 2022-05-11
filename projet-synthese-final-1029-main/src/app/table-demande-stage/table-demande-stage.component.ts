import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { DemandeStage } from '../demande-stages';
import { DemandeStageService } from '../demande-stage.service';
//import { DEMANDESTAGES } from '../mock-demande-stage';


@Component({
  selector: 'app-table-demande-stage',
  templateUrl: './table-demande-stage.component.html',
  styleUrls: ['./table-demande-stage.component.sass']
})
export class TableDemandeStageComponent implements OnInit {
  tableauDemandeStages: DemandeStage[] = [];
  columnsToDisplay = ['icones', 'title', 'activitySector', 'region', 'startDate', 'actions'];
  titre = 'Demande de stage';
  selectedDemande?: DemandeStage;
  graduation = faGraduationCap;
  ligne = faMinus;
  modifier= faEdit;
  suppression = faTrash;
  voir = faEye;
    
  constructor(private demandeStageService: DemandeStageService) { }

  ngOnInit(): void {
    this.getDemandeStages();
  }

  getDemandeStages(): void {
    this.demandeStageService.getDemandeStages()
      .subscribe(tableauDemandeStages => this.tableauDemandeStages = tableauDemandeStages)
  }

  suppDemande(tableauDemandeStages: DemandeStage){
    this.demandeStageService.supprDemandeStage(tableauDemandeStages)
    .subscribe(() => (this.tableauDemandeStages = this.tableauDemandeStages));
  }
}
