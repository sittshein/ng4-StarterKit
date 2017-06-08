import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'app/characters/models';


@Component({
  selector: 'my-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {
  @Input() character: ICharacter;

  constructor() { }

  ngOnInit() {
  }

}
