import { Component, OnInit,Input } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntreprisesService } from '../entreprises.service';

@Component({
  selector: 'app-maj-entreprise',
  templateUrl: './maj-entreprise.component.html',
  styleUrls: ['./maj-entreprise.component.sass']
})
export class MajEntrepriseComponent implements OnInit {

  @Input() entreprise: Entreprise = {
_id: '',
name: '',
description: '',
imageUrl: '',
contactName: '',
contactEmail: '',
contactPhone:'',
address: '',
city: '',
province: '',
postalCode: '',
published: true,
__v: 0
    };

  constructor(private EntreprisesService: EntreprisesService) { }

  ngOnInit(): void {
  }
  AjoutEntreprise(): void {
    this.entreprise._id = "623360587ecfa34056f012f1"
    let postRequest = JSON.stringify(this.entreprise)
    this.EntreprisesService.AjoutEntreprise(postRequest).subscribe();
    console.log(postRequest)
  }
  Test(): void {
    console.log(this.entreprise)
  }

}
