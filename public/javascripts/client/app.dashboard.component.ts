import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/app.dashboard.component.html',
    styleUrls: ['app/app.dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) {}

    getHeroes() {
         this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}