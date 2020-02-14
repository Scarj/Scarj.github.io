import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Hero} from "../../data/hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
