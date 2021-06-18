import { Component, OnInit } from '@angular/core';
import { Hero } from "../../interfaces/hero";
import { HeroService } from "../../services/hero.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
