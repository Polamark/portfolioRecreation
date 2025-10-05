import { Component } from '@angular/core';
import {HeroSection} from './hero-section/hero-section';

@Component({
  selector: 'app-landing',
  imports: [
    HeroSection
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
