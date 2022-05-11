import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';
import { MajOffreStageComponent } from './maj-offre-stage/maj-offre-stage.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';
import { ListeOffresStagesComponent } from './liste-offres-stages/liste-offres-stages.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';
import { ModifDemandeStageComponent } from './modif-demande-stage/modif-demande-stage.component';
import { VoirDemandeStageComponent } from './voir-demande-stage/voir-demande-stage.component';
import { TableDemandeStageComponent } from './table-demande-stage/table-demande-stage.component';

import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { FormMajCandidatComponent } from './form-maj-candidat/form-maj-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { MajEntrepriseComponent } from './maj-entreprise/maj-entreprise.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';

const childrenRoutes: Routes = [
  { path: 'ajoutDemande', component: AjoutDemandeStageComponent},
  { path: 'voirDemande/:_id', component: VoirDemandeStageComponent},
  { path: 'modifDemande/:_id', component: ModifDemandeStageComponent},
  { path: 'tableDemande', component: TableDemandeStageComponent},
  { path: 'candidats', component: ListeDesCandidatsComponent },
  { path: 'candidat/:_id', component: FicheCandidatComponent  },
  { path: 'update/:_id', component: FormMajCandidatComponent },
  { path: 'ajouter-un-candidat', component: FormAjoutCandidatComponent },
  { path: 'candidats', component: ListeDesCandidatsComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'entreprises-details/:_id', component: EntreprisesDetailsComponent },
  { path: 'form-ajout-candidat', component: FormAjoutCandidatComponent },
  { path: 'ajout-entreprise', component: AjoutEntrepriseComponent},
  { path: 'offres', component: ListeOffresStagesComponent },
  { path: 'offre/:_id', component: OffreDetailComponent},
  { path: 'maj-offre/:_id', component: MajOffreStageComponent},
  { path: 'ajout-offre', component: AjoutOffreStageComponent},
  { path: 'tableauBord', component: TableauBordComponent}  
];

const routes: Routes = [

  // ceci correspond à la page de connexion qui inclu toutes les pages enfants

  { path: '', component: LayoutComponent, children: childrenRoutes },

  // Celle-ci est notre page d'accueil- je l'ai représenté par le nom: login
  // Lorsque vous allez lancer l'application vous devez ajouter /login à la barre d'url pour voir apparaître la 1er page de connexion.
  { path: 'login', component: AccueilComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Aller chercher entreprise dans API
// Afficher donnéee réel entreprise
// Modification donnée et envoi à l'API.
