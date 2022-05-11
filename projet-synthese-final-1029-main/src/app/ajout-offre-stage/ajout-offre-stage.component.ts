import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InterfaceOffreStage } from '../interface-offre-stage';
import { OffreStageService } from '../offre-stage.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajout-offre-stage',
  templateUrl: './ajout-offre-stage.component.html',
  styleUrls: ['./ajout-offre-stage.component.sass']
})
export class AjoutOffreStageComponent implements OnInit {
  title = 'Offre de stage';
  @Input() offre: InterfaceOffreStage = { _id: '', title: '', description: '', enterprise: '', startDate: new Date, endDate: new Date, program: '',
  region: '', activitySector: '', requirements: '', stageType: '', hoursPerWeek: 0, additionalInfo: '', paid: [''], skills: [''], published: true }
  constructor(
    private route: ActivatedRoute,
    private offreService: OffreStageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.addOffre();
  }

  addOffre(): void {
    this.offreService.addOffre(this.offre).subscribe();
  }


  onSave(offreAjoutForm: NgForm){
    if(offreAjoutForm.valid){
      if(!this.offre._id){
        this.offreService.editOffre(this.offre).subscribe();
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
