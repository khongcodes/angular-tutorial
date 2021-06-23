import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../../interfaces/hero";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  // ActivatedRoute - holds information about the route to this instance of the HeroDetailComponent
  //    including the route's parameters
  // 
  // Location - Angular service for interacting with browser
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  // /////////////////////////////
  // // INPUT PARAMETER EXAMPLE
  // // This component needs to be instantiated with an Input property
  // // for hero 
  // @Input() hero?: Hero;
  // /////////////////////////////


  hero?: Hero;

  // route.snapshot is a static image of the route information shortly after
  // component was created
  // route parameters are always strings; hence Number(any) conversion
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();
  }
}
