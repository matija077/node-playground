import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'javascripts/client/heroes.component.html',
    styleUrls:  ['javascripts/client/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[] = [];
	selectedHero: Hero;

		constructor(
			private _router: Router,
			private _heroService: HeroService) {}

		getHeroes() {
			this._heroService.getHeroes()
				.then(heroes => this.heroes = heroes);
		}

    ngOnInit() {
        this.getHeroes();
    }

		onSelect(hero: Hero) {
			this.selectedHero = hero;
		}

		gotoDetail() {
			let link = ['HeroDetail', { id: this.selectedHero.id }];
			this._router.navigate(link);
		}
}