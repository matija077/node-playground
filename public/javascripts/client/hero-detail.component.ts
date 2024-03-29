import { Component, Input, OnInit } from 'angular2/core';
import {  RouteParams } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-her-detail',
    templateUrl: 'javascripts/client/hero-detail.component.html',
    styleUrls: ['javascripts/client/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {}

    ngOnInit() {
        //+ -- convert string: routeParam[id] => number: id
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}