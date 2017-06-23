
import { Component, ElementRef, OnInit} from '@angular/core';
import {ServProjetsService} from '../serv-projets.service';
import { Router, ActivatedRoute, Params, NavigationEnd, NavigationStart } from '@angular/router';
import {MdIconRegistry} from '@angular/material';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss'],
  providers: [],
    host:{
        '(window:scroll)': 'updateHeader($event)'
    }
})
export class EnteteComponent implements OnInit {
    titre : string = "Projet : hubefox.com";
    pageActive:String;
    isScrolled = false;
    isScrollingUp = false;
    currPos: number = 0;
    startPos: number = 0;
    changePos: number = 100;
    elementRef:any;
    constructor(private servProjets:ServProjetsService, 
                private route: ActivatedRoute,
                private router: Router,
                private iconRegistry: MdIconRegistry,
                public myElement: ElementRef) { 
        this.elementRef = myElement;
    }

    ngOnInit() {
       
        this.router.events.subscribe(this.getRoute.bind(this));


    } 
    getRoute(evt){
        if(evt instanceof NavigationEnd)
        {
            this.pageActive = evt.url;
        }
    }
//**pour écouter l'etat de l'entete et executer une action (faire monter l'entete à la detection du scroll)
 //**CODE Ref:  https://cubcode.wordpress.com/2016/06/22/change-header-on-scroll-in-angular2-typescript/

updateHeader(evt) {
    console.log("updateHeader",  this.currPos);
    //console.log(evt)
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos) {
            this.isScrolled = true;
            this.isScrollingUp = false;
        } else{
            this.isScrolled = false;
            this.isScrollingUp = true;
            //window.scrollTo(0,0);
        }
        if(this.currPos <= 10){
            this.isScrollingUp = false;
        }
    }
}
