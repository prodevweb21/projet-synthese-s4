import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { InterfaceOffreStage } from '../interface-offre-stage';
import { OffreStageService } from '../offre-stage.service';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.sass']
})
export class OffreDetailComponent implements OnInit {

  offre: InterfaceOffreStage = {
    _id: "",
    title: "",
    description: "",
    enterprise: "",
    startDate: new Date,
    endDate: new Date,
    program: "",
    region: "",
    activitySector: "",
    requirements: "",
    stageType: "",
    hoursPerWeek: 0,
    additionalInfo: "",
    paid: [""],
    skills: [""],
    published: false
  }

  constructor(
    private route: ActivatedRoute,
    private offreService: OffreStageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOffre();
  }

  getOffre(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.offreService.getOffre(id)
    .subscribe(offre => this.offre = offre);
    console.log(id);
    console.log(this.offre);
  }

  goBack(): void {
    this.location.back();
  }

}
