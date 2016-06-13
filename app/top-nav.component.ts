import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
//import {enableProdMode} from 'angular2/core';

//enableProdMode();

@Component({
    selector: 'top-nav',
    styleUrls:['assets/css/styles.css'],
    templateUrl:'app/top-nav.component.html'
})

export class TopNavComponent {
    constructor(private router: Router) { }

    gotoSettings() {
        let link = ['Settings'];
        this.router.navigate(link);
    }}
