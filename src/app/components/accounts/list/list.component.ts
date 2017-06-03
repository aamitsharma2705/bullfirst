import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../../../objects/account.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() accounts: Account[];
  @Output() public rowSelected: EventEmitter<Node> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(acc) {
    this.rowSelected.emit(acc);
  }

}
