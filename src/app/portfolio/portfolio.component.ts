import { Component, OnInit } from '@angular/core';
import {ServProjetsService} from '../serv-projets.service';
import { Projet } from '../Projet';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    
    mesProjets:Projet[];//array d'objets projet
  constructor(private servProjets:ServProjetsService) {
    this.mesProjets = new Array();
  }

  ngOnInit() {
      this.getProjets();
  }

    //fait la requete pour afficher tous les projets
    getProjets (){
         console.log("function getProjets");
        this.servProjets.getProjets().subscribe(resultat => {this.recevoirProjets(resultat)}, erreur => { console.log(this.mesProjets); this.mesProjets= Array(6).fill({titre:"Pas de projet", annee:"Lorem ipsum", description:"Lorem ipsum"});});
        //this.servProjets.getProjets().subscribe(this.recevoirProjets.bind(this));
    }
    recevoirProjet(resultat){
        console.log(resultat);
        if(resultat.ok)
        {
            this.mesProjets = resultat;
            
        }
    }    
    //traitement du resultat pour faire afficher une image defaut si l'url de l'image est vide
    recevoirProjets(resultat){
        console.log(" UN RESULTAT");
        //verifie existance d'une image si non le image sera le placeholdeit
        resultat.forEach(function(element) {
            
            if(element.url=="")
            {
                element.url="http://placehold.it/300x300";
            }
        });
        this.mesProjets = resultat;
    }
}
