import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  template: `<h1>Bienvenue {{user}}!</h1>`,
  styleUrls: ['./enfant.component.css']
})

export class EnfantComponent {

@Input() user: string = "";

}
