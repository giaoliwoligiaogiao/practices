import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService{
    getHeroer(): Hero[]{
        return HEROES;
    }
}