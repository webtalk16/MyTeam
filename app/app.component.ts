import { Component } from 'angular2/core';
//import {enableProdMode} from 'angular2/core';
//enableProdMode();

@Component({
    selector: 'pm-app',
    templateUrl:'app/app.component.html'
})

export class AppComponent {
    pageTitle: string = 'I added this title';
}
