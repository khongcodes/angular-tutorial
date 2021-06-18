import { Component, OnInit, Input } from '@angular/core';

import { Hero } from "../../interfaces/hero";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // This component needs to be instantiated with an Input property
  // for hero 
  @Input() hero?: Hero;

}
