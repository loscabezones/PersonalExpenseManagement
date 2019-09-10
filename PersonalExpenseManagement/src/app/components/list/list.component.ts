import { Component, OnInit } from '@angular/core';
import { PersonalExpenseManagement } from 'src/app/core/services/personalExpenseManagement.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  listItems = [];

  constructor( private personalExpenseManagement: PersonalExpenseManagement ) { }

  ngOnInit() {
    this.listItems = this.personalExpenseManagement.ListItems;
  }

  ShowForm() {
    this.personalExpenseManagement.showForm = true;
  }

}
