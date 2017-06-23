import { Component, OnInit } from '@angular/core';
import {ServProjetsService} from '../serv-projets.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    nom:string;
    courriel:string;
    message:string;
    
  constructor(private servProjets:ServProjetsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

    // soumet le formulaire de contact
   soumettreContact(){
       // remplis array avec les valeurs réçu
        let data={courriel:this.courriel, nom:this.nom, message:this.message};
        
        this.servProjets.envoyerCourriel(data).subscribe(function(res){
            console.log(res);
            this.viderFormulaire();
        }.bind(this))
        
    }
    //vide les champs du formulaire
    viderFormulaire(){
            this.nom="";
            this.courriel="";
            this.message="";
    }// fin videFormulaire
}
