import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-404',
  template: `
    <article>
      <h4>Inconceivable!</h4>
      <div>I do not think this page is where you think it is.</div>
    </article>
  `
})
export class PageNotFoundComponent { }
