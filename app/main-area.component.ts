import { Component } from 'angular2/core';
//import {enableProdMode} from 'angular2/core';
//enableProdMode();

@Component({
    selector: 'main-area',
    styleUrls:['assets/css/styles.css'],
    templateUrl:'app/main-area.component.html'
})

export class MainAreaComponent {
    pageTitle: string = 'I added this title';
}
