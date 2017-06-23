import { Component, OnInit,trigger, state, style, transition, animate } from '@angular/core';


import {ServProjetsService} from '../serv-projets.service';

import {Projet} from '../projet';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    //styleUrls: ['./accueil.component.scss'],
    providers: []

})
export class AccueilComponent implements OnInit {
   
    
    constructor(private servProjets:ServProjetsService) { 
    }

    ngOnInit() {
    }
    

}
