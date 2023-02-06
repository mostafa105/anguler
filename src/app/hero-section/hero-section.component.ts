import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  fname : string = 'Mostafa';
  mname : string = 'fahmy '
  lname : string = 'Mohamed'
  jobtitle : string = 'web developer';

}
