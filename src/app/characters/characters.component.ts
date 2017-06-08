import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-character',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
