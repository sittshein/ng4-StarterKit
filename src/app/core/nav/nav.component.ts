import { Component, OnInit } from '@angular/core';


class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  title = 'Angular4 StarterKit';
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Characters', link: ['/characters'] },
      { caption: 'Vehicles', link: ['/vehicles'] },
      { caption: 'Admin', link: ['/admin'] },
      { caption: 'Login', link: ['/login'] },
    ];
  }

  constructor() { }

}
