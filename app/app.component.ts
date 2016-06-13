import { Component } from 'angular2/core';
import {TopNavComponent} from './top-nav.component';
import {SettingsComponent} from './settings.component';
import {PlayerComponent} from './player.component';
import {MainAreaComponent} from './main-area.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
//import {enableProdMode} from 'angular2/core';
//enableProdMode();

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['assets/css/styles.css'],
    directives: [TopNavComponent, SettingsComponent, PlayerComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/settings',
        name: 'Settings',
        component: SettingsComponent
    },
    {
        path: '/player',
        name: 'Player',
        component: PlayerComponent
    },
])
export class AppComponent {
    pageTitle: string = 'I added this title';
}
