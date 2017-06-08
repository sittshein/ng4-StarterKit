import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../characters/models';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Top Characters';
  characters: ICharacter[];

  constructor() { }

  ngOnInit() {
    this.characters = [
      {
        'id': 11,
        'name': 'Chewbacca',
        'side': 'light'
      },
      {
        'id': 12,
        'name': 'Rey',
        'side': 'light'
      },
      {
        'id': 13,
        'name': 'Finn (FN2187)',
        'side': 'light'
      },
      {
        'id': 14,
        'name': 'Han Solo',
        'side': 'light'
      }
    ]
  }

}
