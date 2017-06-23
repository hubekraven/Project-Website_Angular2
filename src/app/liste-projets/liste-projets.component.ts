import { Component, OnInit, Input } from '@angular/core';
import {ServProjetsService} from '../serv-projets.service';
import { Projet } from '../Projet';

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.scss']
})
export class ListeProjetsComponent implements OnInit {
   @Input()
    mesProjets:Projet[];
    //projet:Projet;
  constructor(private servProjets:ServProjetsService)
    { 
   // this.mesProjets = new Array();
        
  }

  ngOnInit() {
     // console.log(this.mesProjets);
      //this.getProjets ();
  }
    ngOnChanges(){
       // console.log("ListedesProjets");
        //this.getProjets ();
        //console.log(this.mesProjets);
    }
     
    /*getProjets (){
         console.log("function getProjets");
        this.servProjets.getProjets().subscribe(resultat => {this.mesProjets = resultat}, erreur => { console.log(this.mesProjets); this.mesProjets= Array(6).fill({titre:"Pas de projet", annee:"Lorem ipsum", description:"Lorem ipsum"});});
        
    } */
    getProjets (){
         console.log("function getProjets");
        this.servProjets.getProjets().subscribe(this.recevoirProjets.bind(this));
        /*this.servProjets.getProjets().subscribe(resultat =>{this.recevoirProjet.bind(this)}, erreur => { console.log(this.mesProjets); this.mesProjets= Array(6).fill({titre:"Pas de projet", annee:"Lorem ipsum", description:"Lorem ipsum"});});*/
        
    }
    /*recevoirProjet(resultat){
        console.log(" UN RESULTAT", resultat);
        if(resultat.ok)
        {
            this.mesProjets = resultat;
            
        }
    }  */
    
    /*recevoirProjets(resultat){
        console.log(" UN RESULTAT", resultat);
        if(resultat.ok)
        {
            this.mesProjets = resultat;
            
        }
    } */
    
    recevoirProjets(resultat){
        console.log(" UN RESULTAT");
        //console.log(" UN RESULTAT: "+ resultat);
        //verifie existance d'une image si non le image sera le placeholdeit
        resultat.forEach(function(element) {
            
            if(element.url=="")
            {
                element.url="http://placehold.it/250x250";
            }
        });
        this.mesProjets = resultat;
    }
        
}
