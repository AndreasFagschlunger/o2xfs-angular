import { Component, OnInit } from '@angular/core';

import { CdmStatus320 } from 'xfs320';

@Component({
  selector: 'lib-cdm-status',
  templateUrl: './cdm-status.component.html',
  styleUrls: ['./cdm-status.component.scss']
})
export class CdmStatusComponent implements OnInit {

  status: CdmStatus320;

  constructor() { }

  ngOnInit() {
  }
}
