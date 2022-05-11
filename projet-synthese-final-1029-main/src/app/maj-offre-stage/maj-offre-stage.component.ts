import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InterfaceOffreStage } from '../interface-offre-stage';
import { OffreStageService } from '../offre-stage.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Créer un composant MajOffreStageComponent
@Component({
  selector: 'app-maj-offre-stage',
  templateUrl: './maj-offre-stage.component.html',
  styleUrls: ['./maj-offre-stage.component.sass']
})
export class MajOffreStageComponent implements OnInit {
  @Input() offre: InterfaceOffreStage = { _id: '', title: '', description: '', enterprise: '', startDate: new Date, endDate: new Date, program: '',
  region: '', activitySector: '', requirements: '', stageType: '', hoursPerWeek: 0, additionalInfo: '', paid: [''], skills: [''], published: true }

  // @Output() majTableau = new EventEmitter<string>();

  // Je veux modifier un offre de stage.
  // J'ai besoin du ID de l'offre que je veux modifier.
  // Je vais injecter la class router pour aller chercher mon ID dans l'URL.
  constructor(    
    private route: ActivatedRoute,
    private offreService: OffreStageService,
    private location: Location
    ) { }
  
  ngOnInit(): void {
    this.getOffre();
  }
  // aller chercher le id dans l'url de l'offre, puis subscribe au service 
  // pour me retourner l'offre relié à l'ID 
  getOffre(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.offreService.getOffre(id)
    .subscribe(offre => this.offre = offre);
  } 
  // méthode pour envoyer l'information de la mise à jour.
  onSave(offreForm: NgForm){
    if(offreForm.valid){
      if(!this.offre._id){
        this.offreService.editOffre(this.offre).subscribe();
      }
    }
  }
  // Retour à la page précédente
  goBack(): void {
    this.location.back();
  }
}
