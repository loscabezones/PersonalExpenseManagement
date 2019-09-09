import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalExpenseManagement {

  showForm: boolean = false;
  public ListItems = [];

  constructor() {
  }

  formatDate(dateSelected) {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    if (!dateSelected) {
      return d + "/" + m + "/" + y;
    } else {
      date = new Date(dateSelected)
      y = date.getFullYear();
      m = date.getMonth() + 1;
      d = date.getDate();
      return d + "/" + m + "/" + y;
    }
  }

}
