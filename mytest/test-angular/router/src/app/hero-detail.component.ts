// import { Component } from '@angular/core';
import { Component, Input} from '@angular/core';

import { Hero } from './hero';


@Component({
    selector:'hero-detail',
    templateUrl:'./second-component.html'
})
export class HeroDetailComponent{
  
  @Input() hero:Hero;
}