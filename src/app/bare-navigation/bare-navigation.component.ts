import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import{EnteteComponent} from '../entete/entete.component';

@Component({
  selector: 'app-bare-navigation',
  templateUrl: './bare-navigation.component.html',
  styleUrls: ['./bare-navigation.component.scss'],
   //providers: [],
})
export class BareNavigationComponent implements OnInit {
	pageActive:String;
    isScrollingUp:false;
    isScrolled:false;
  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
	this.router.events.subscribe(this.getRoute.bind(this));
  }

  getRoute(evt){
        if(evt instanceof NavigationEnd)
        {
            this.pageActive = 'evt.url';
           // console.log("TEST" + this.pageActive);
        }
    }
}
