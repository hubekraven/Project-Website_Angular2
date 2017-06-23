import { Component, OnInit } from '@angular/core';
import {Projet} from '../Projet';
import {ServProjetsService} from '../serv-projets.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import { AfficheDialogueComponent } from '../affiche-dialogue/affiche-dialogue.component';

@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.scss']
})
export class ProjetDetailsComponent implements OnInit {
    projet:Projet;
    id_projet:number;
    
  constructor(private servProjets:ServProjetsService,
              private route: ActivatedRoute,
                private router: Router) { }
//recuper le projet passé en parametre au lancement du composant
  ngOnInit() {
      this.id_projet = this.route.snapshot.params['id_projet'];
      this.getProjet(this.id_projet);
      
  }
   
    //fonction pour recuperer un projet par son id    
    getProjet(id_projet){
        console.log(id_projet);
        this.servProjets.getProjet(id_projet).subscribe(this.recevoirProjet.bind(this));
    }
    
     recevoirProjet(data){
        //verifie existance d'un media si non donne une dummy 
        data.medias.forEach(function(element) {
            //donne un dummy si url du média est vide
            if(element.url_media=="")
            {
                switch(element.type){
                    /*case 'video':
                        element.url_media="https://www.youtube.com/embed/RH3i7qONrT4";  
                        break;*/
                    case 'image':   
                            element.url_media="http://placehold.it/600x600";
                        break;
                    default:
                        element.url_media="http://placehold.it/600x600";
                //console.log(element.url_media);
                }        
            }
        });
        this.projet = data;
    }
    
}
