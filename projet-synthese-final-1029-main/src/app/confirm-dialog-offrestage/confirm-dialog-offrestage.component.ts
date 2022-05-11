import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { OffreStageService } from '../offre-stage.service';
import { InterfaceOffreStage } from '../interface-offre-stage';


@Component({
  selector: 'app-confirm-dialog-offrestage',
  templateUrl: './confirm-dialog-offrestage.component.html',
  styleUrls: ['./confirm-dialog-offrestage.component.sass']
})
export class ConfirmDialogOffrestageComponent implements OnInit {
  title: string;
  message: string;
  offrestage: InterfaceOffreStage[] = [];
  constructor(private offrestageService: OffreStageService, public dialogRef: MatDialogRef<ConfirmDialogOffrestageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
      this.title = data.title;
      this.message = data.message;
     }

  ngOnInit(): void {
    this.getOffreDeStage();
  }

  getOffreDeStage(): void {
    this.offrestageService.getOffresStages()
    .subscribe(offrestage => this.offrestage = offrestage);
  } 


  onCommand(): void {
    this.dialogRef.close(true);
  }
  onDelete(): void {
    this.dialogRef.close(false);
  }
}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
