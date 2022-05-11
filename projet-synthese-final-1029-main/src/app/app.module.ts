// Modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog' ;'@material/button';


import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { OffreStageService } from './offre-stage.service';
import { MessageserviceComponent } from './messageservice/messageservice.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';
import { MajOffreStageComponent } from './maj-offre-stage/maj-offre-stage.component';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


// Composants

import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { DemandeStageService } from './demande-stage.service';
import { TableDemandeStageComponent } from './table-demande-stage/table-demande-stage.component';
import { FormDemandeStageComponent } from './form-demande-stage/form-demande-stage.component';
import { VoirDemandeStageComponent } from './voir-demande-stage/voir-demande-stage.component';
import { ModifDemandeStageComponent } from './modif-demande-stage/modif-demande-stage.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';

import { AccueilComponent } from './accueil/accueil.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormMajCandidatComponent } from './form-maj-candidat/form-maj-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { IdentificationComponent } from './identification/identification.component';
import { NavigationComponent } from './navigation/navigation.component'

// Services

import { CandidatService } from './candidat.service';
import { IdentificationService } from './identification.service';
import { EntreprisesService } from './entreprises.service';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';
import { ListeOffresStagesComponent } from './liste-offres-stages/liste-offres-stages.component';
import { ConfirmDialogOffrestageComponent } from './confirm-dialog-offrestage/confirm-dialog-offrestage.component';
import { LayoutComponent } from './layout/layout.component';
import { MajEntrepriseComponent } from './maj-entreprise/maj-entreprise.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';

// const appRoute: Routes = [
//   {path: 'liste', component: ListeOffresStagesComponent},
//   {path: 'liste/view/:id', component: VueOffreStageComponent},
// ]
@NgModule({
  declarations: [
    AppComponent,
    TableDemandeStageComponent,
    FormDemandeStageComponent,
    VoirDemandeStageComponent,
    ModifDemandeStageComponent,
    AjoutDemandeStageComponent,
    AccueilComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
    ListeOffresStagesComponent,
    MessageserviceComponent,
    OffreDetailComponent,
    MajOffreStageComponent,
    AjoutOffreStageComponent,
    FicheCandidatComponent,
    SidebarComponent,
    NavbarComponent,
    FormMajCandidatComponent,
    ConfirmationDialogComponent,
    EntreprisesComponent,
    EntreprisesDetailsComponent,
    IdentificationComponent,
    AjoutEntrepriseComponent,
    NavigationComponent,
    LayoutComponent,
    MajEntrepriseComponent,
    TableauBordComponent
  ],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    // NgbModule,
    FontAwesomeModule,
    // FlexLayoutModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule

  ],
  entryComponents: [ConfirmDialogOffrestageComponent],
  bootstrap: [AppComponent],
  providers: [EntreprisesService,CandidatService,IdentificationService, DemandeStageService, OffreStageService],

  // schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  // a remettre candidatService dans providers apres
})
export class AppModule {
  constructor() {
  }
}
