import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PersonalExpenseManagement {

  showForm: boolean = false;
  public ListItems =  localStorage.getItem("List") ? JSON.parse(localStorage.getItem("List")) : [];

  constructor() {
  }

  formatDate(dateSelected) {
    if (!dateSelected) {
      const actualDate = formatDate(new Date(), 'dd/MM/yyyy', 'en');
      return actualDate
    } else {
      const formatDay = formatDate(new Date(dateSelected), 'dd/MM/yyyy', 'en');
      return formatDay;
    }
  }

  orderArray(){
    this.ListItems.sort(function (a, b) {
      a = new Date(a.fecha);
      b = new Date(b.fecha);
      return a - b;
    });
    this.ListItems.reverse();
  }

}
