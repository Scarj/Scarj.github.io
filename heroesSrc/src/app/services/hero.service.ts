import {Injectable} from '@angular/core';
import {HEROES} from "../data/mock-heroes";
import {Observable, of} from "rxjs";
import {Hero} from "../data/hero";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}