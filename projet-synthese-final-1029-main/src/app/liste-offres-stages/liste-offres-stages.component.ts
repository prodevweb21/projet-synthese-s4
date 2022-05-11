import { Component, OnInit } from '@angular/core';
import { OffreStageService } from '../offre-stage.service'; // Service
import { InterfaceOffreStage } from '../interface-offre-stage'; // Interface 
import { MajOffreStageComponent } from '../maj-offre-stage/maj-offre-stage.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel } from '../confirm-dialog-offrestage/confirm-dialog-offrestage.component';
import { ConfirmDialogOffrestageComponent } from '../confirm-dialog-offrestage/confirm-dialog-offrestage.component';

@Component({
  selector: 'app-liste-offres-stages',
  templateUrl: './liste-offres-stages.component.html',
  styleUrls: ['./liste-offres-stages.component.sass']
})
export class ListeOffresStagesComponent implements OnInit {
  title = "Offres de stage";
  btnAction = "Ajouter une offre de stage"
  offrestage: InterfaceOffreStage[] = [];
  selectedOffre?: InterfaceOffreStage;
  result: string = "";

  // colonnes du tableau de la liste des offres de stages '
   displayedColumns = ['title', 'activitySector', 'region', 'published', 'action' ];

  constructor(private offrestageService: OffreStageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOffreDeStage();
  }
  // Appel l'ensemble des offres de stages
  getOffreDeStage(): void {
    this.offrestageService.getOffresStages()
    .subscribe(offrestage => this.offrestage = offrestage);
  } 

  deleteOffre(offrestage: InterfaceOffreStage){
    this.offrestageService.deleteOffre(offrestage)
    .subscribe(() => (this.offrestage = this.offrestage.filter((o) => o._id !== offrestage._id))
    );
  }
  confirmDialog(): void {
    const message = `Désirez-vous supprimer cette offre de stage ? `;
    const dialogData = new ConfirmDialogModel("", message);

    const dialogRef = this.dialog.open(ConfirmDialogOffrestageComponent, {
      maxWidth: "600px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }

}
