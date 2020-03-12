import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hero} from "../../data/hero";
import {HeroService} from "../../services/hero.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
