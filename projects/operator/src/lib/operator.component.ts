import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-operator',
  template: `
    <p>
      operator works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
