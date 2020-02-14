import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hero} from "../../data/hero";
import {HeroService} from "../../services/hero.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private heroService: HeroService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
