import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';




@Component({
  selector: 'app-fiche-candidat',
  templateUrl: './fiche-candidat.component.html',
  styleUrls: ['./fiche-candidat.component.sass']
})
export class FicheCandidatComponent implements OnInit {
  dialogRef: MatDialogRef<ConfirmationDialogComponent> | undefined;



  _id!: number;
  candidat!: Candidat;

  constructor(private candidatService: CandidatService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {}

  
      // test modal pour le delete non fonctionnel/j'ai fait activer une alerte avec le delete qui est fonctionnel plus bas
       
      // openDialog(){
        
      //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      //     width: '250px',
      //   });

      //     dialogRef.afterClosed().subscribe(result => {
      //       if(result.event == 'Delete'){
      //         this.deleteCandidat(result._id);
      //       }
      //     })

      // }


  ngOnInit() {
    this.candidat = new Candidat();
    this._id = this.route.snapshot.params['_id'];



    // Ceci est une fonction qui permet l'affichage du détail d'un candidat
    this.candidatService.getCandidat(this._id)
    .subscribe(data => {
      console.log(data)
      this.candidat = data;
      }, error => console.log(error));
  }

  // Ceci est une fonction qui permet la mise à jour de la fiche du candidat

  editCandidat(_id: number) {
    this.router.navigate(['update', _id]);
    console.log(_id);

  }

  
  // Ceci est une fonction qui permet de supprimer le candidat

    deleteCandidat(_id: number) {
      // Ceci est une alerte pour aviser de la suppression du candidat
      if (window.confirm('Voulez-vous supprimer?')) {
      this.candidatService.deleteCandidat(_id).subscribe(data => { console.log(data); this.ngOnInit();
      },
        
      error => console.log(error));
      }}
      

   

    // Cette function permet de retourner à la liste principale des candidats.(acceuil)
   listesCandidat() {  
   this.router.navigate(['/candidats'])
  }
  }








