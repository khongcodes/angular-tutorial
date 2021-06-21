import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from "../interfaces/hero";
import { HEROES } from "../../assets/mock-heroes";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // this service must be public if you're going to
  // bind to it in the template!
  constructor(public messageService: MessageService) { }

  // Observable<Hero[]> - 
  //  an Observable that emits a single value; that mock array
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

}
