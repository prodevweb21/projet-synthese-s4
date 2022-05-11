import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faClipboardList, faUser, faGraduationCap, faMinus, faEdit, faTrash, faEye} from '@fortawesome/free-solid-svg-icons';
import { OffreStageService } from '../offre-stage.service';
import { InterfaceOffreStage } from '../interface-offre-stage';
import { DemandeStageService } from '../demande-stage.service';
import { DemandeStage } from '../demande-stages';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel } from '../confirm-dialog-offrestage/confirm-dialog-offrestage.component';
import { ConfirmDialogOffrestageComponent } from '../confirm-dialog-offrestage/confirm-dialog-offrestage.component';

@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.sass']
})
export class TableauBordComponent implements OnInit {  

  btnValid = "Valider toutes les offres";
  tableauOffrestage: InterfaceOffreStage[] = [];
  selectedOffre?: InterfaceOffreStage;
  result: string = "";
  tableauDemandeStages: DemandeStage[] = [];
  titre = 'Demande de stage';
  selectedDemande?: DemandeStage;
  graduation = faGraduationCap;
  ligne = faMinus;
  modifier= faEdit;
  suppression = faTrash;
  voir = faEye;
  paperPlane = faPaperPlane;
  feuille = faClipboardList;
  user = faUser;

  constructor(private offrestageService: OffreStageService, private demandeStageService: DemandeStageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOffreDeStage();
    this.getDemandeStages();
  }


  // Appel l'ensemble des demandes de stages

  getDemandeStages(): void {
    this.demandeStageService.getDemandeStages()
      .subscribe(tableauDemandeStages => this.tableauDemandeStages = tableauDemandeStages)
  }

  suppDemande(tableauDemandeStages: DemandeStage){
    this.demandeStageService.supprDemandeStage(tableauDemandeStages)
    .subscribe(() => (this.tableauDemandeStages = this.tableauDemandeStages));
  }

  // Appel l'ensemble des offres de stages
  getOffreDeStage(): void {
    this.offrestageService.getOffresStages()
    .subscribe(offrestage => this.tableauOffrestage = offrestage);
  } 

  deleteOffre(offrestage: InterfaceOffreStage){
    this.offrestageService.deleteOffre(offrestage)
    .subscribe(() => (this.tableauOffrestage = this.tableauOffrestage.filter((o) => o._id !== offrestage._id))
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
