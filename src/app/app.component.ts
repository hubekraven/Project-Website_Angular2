import { Component } from '@angular/core';
import {ServProjetsService} from './serv-projets.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'],
  providers: [ServProjetsService],
})


export class AppComponent {
    constructor(private servProjets:ServProjetsService)
    {
        this.servProjets.init()    
    }
}
