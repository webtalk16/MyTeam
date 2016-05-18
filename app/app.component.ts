import { Component } from 'angular2/core';

@Component({
    selector: 'pm-app',
    templateUrl:'app/app.component.html'
})

export class AppComponent {
    pageTitle: string = 'I added this title';
}
