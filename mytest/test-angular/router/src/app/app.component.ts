import { heros } from './../../../../../angular4-cli/project/src/app/ts/hero';
import { HeroService } from './hero.service';
import {
  Component
} from '@angular/core';
import {
  Hero
}
 from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';

  // hero:Hero={id:1,name:'windstorm'};

  // heroes = HEROES;
  selectedHero: Hero;
  onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService:HeroService){}
}
