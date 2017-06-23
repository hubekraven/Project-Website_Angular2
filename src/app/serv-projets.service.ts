import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Projet} from './projet';

@Injectable()
export class ServProjetsService {
    //route vers le service
    //url:string = "http://127.0.0.1:8000/webservice/php_huberson";
	url:string = "http://hubefox.info/php_portfolio";
    
    constructor(private http:Http) { 
    }
    
    init()
    {
        
    }
     //methode pour faire la requete de tous les projets
    getProjets() : Observable<Array<any>>{
        return this.http.get(this.url+"/projet/").map(this.extraire).catch(this.gestionErreur);
    
    }
    
    //methode pour faire la requete d'un projet
    getProjet(id) : Observable<Response>{        
        var temp = this.http.get(this.url+"/projet/"+id).map(this.extraire).catch(this.gestionErreur);
        return temp;
    }
    
    
    //methode pour faire des requetes de soumission de contact
    envoyerCourriel(data) : Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });  
        return this.http.put(this.url+"/contactez-moi", data, options)
                    .map(this.extraire)
                    .catch(this.gestionErreur); 
    }
     private extraire (res:Response){
        console.log(res);
        let body = res.json();
        return body || {};
    }
   //methode pour traiter les erreurs de requete
    private gestionErreur(error:Response | any){
        console.log(error);
        return Observable.throw(error); 
    }
    
}
