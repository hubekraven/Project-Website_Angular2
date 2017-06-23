import { Component, OnInit, Input } from '@angular/core';
import {Projet} from '../Projet';
import {ServProjetsService} from '../serv-projets.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import { AfficheDialogueComponent } from '../affiche-dialogue/affiche-dialogue.component';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})

export class ProjetComponent implements OnInit {
    @Input()
    projet:Projet;
    mesProjets:any;
    dialogueMsg: string;
    id_projet:number;
     
  constructor(private servProjets:ServProjetsService,
                private router: Router,
              private route: ActivatedRoute,
                ) { }

  ngOnInit() {
      //this.id=+this.projetDetail.id_projet;
  }
     
     getProjets()
     {
        //this.servProjets.getProjets().subscribe(resultat => {this.mesProjets = resultat}, erreur => { console.log(this.mesProjets); this.mesProjets= Array(12).fill({titre:"Pas de projet", brasserie:"Lorem ipsum", description:"Lorem ipsum"});});
    }//fin getprojet()
     
     
}
