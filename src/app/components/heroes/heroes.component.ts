import { Component, OnInit } from '@angular/core';

import { Hero } from "../../interfaces/hero";
import { HeroService } from "../../services/hero.service";
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];

  // component constructor should do minimal initialization - 
  //    like wire constructor parameters to properties.
  // it should NOT make HTTP requests to a server
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  
  // getHeroes should have an asynchronous signature because it is
  // fetching data from a remote source!
  // example: use Angular HttpClient.get; returning an Observable
  // 
  // getHeroes() returns an Observable<Heroes[]>, emitting Heroes[]
  // Observable.subscribe() passes the emitted value (Heroes[]) to the callback
  // which sets this component's heroes property
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
