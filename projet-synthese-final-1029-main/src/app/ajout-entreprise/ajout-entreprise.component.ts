import { Component, OnInit,Input } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntreprisesService } from '../entreprises.service';

// Comment faire du regex dans Angular ?
@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.sass']
})
export class AjoutEntrepriseComponent implements OnInit {

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
