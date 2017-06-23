
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetDetailsComponent } from './projet-details/projet-details.component';
import { EnteteComponent } from './entete/entete.component';
import { ProjetComponent } from './projet/projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { AfficheDialogueComponent } from './affiche-dialogue/affiche-dialogue.component';
import { AproposComponent } from './apropos/apropos.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BareNavigationComponent } from './bare-navigation/bare-navigation.component';

//définition des routes de navigation du site
const appRoutes: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: 'projets', component: PortfolioComponent},
    {path: 'projet/:id_projet', component: ProjetDetailsComponent},
    {path: 'competences', component: CompetencesComponent},
    {path: 'A propos', component: AproposComponent},
    {path: 'contactez-moi', component: ContactComponent},
    {path: '', redirectTo:'/',pathMatch: 'full'},
    {path: '**', redirectTo:'/',pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProjetDetailsComponent,
    EnteteComponent,
    ProjetComponent,
    ListeProjetsComponent,
    AfficheDialogueComponent,
    AproposComponent,
    CompetencesComponent,
    ContactComponent,
    PortfolioComponent,
    BareNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    //MdDialogModule
  ],
    entryComponents:[AfficheDialogueComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
