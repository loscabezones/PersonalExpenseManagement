import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalExpenseManagement } from 'src/app/core/services/personalExpenseManagement.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  ListItems = [];
  public personalExpenseForm: FormGroup;

  constructor(private personalExpenseManagement: PersonalExpenseManagement) {
    this.personalExpenseForm = new FormGroup({
      fecha: new FormControl(),
      concepto: new FormControl('', Validators.required),
      importe: new FormControl('', Validators.required),
    });
  }

  get fecha() { return this.personalExpenseForm.get('fecha'); }
  get concepto() { return this.personalExpenseForm.get('concepto'); }
  get importe() { return this.personalExpenseForm.get('importe'); }

  ngOnInit() {
    this.ListItems = this.personalExpenseManagement.ListItems;
  }

  onSubmitForm() {
    const date = this.personalExpenseManagement.formatDate(this.fecha.value)

    const formValues = {
      fecha: date,
      concepto: this.concepto.value,
      importe: this.importe.value
    };

    this.ListItems.push(formValues);
    this.personalExpenseManagement.orderArray()
    localStorage.setItem("List", JSON.stringify(this.ListItems));
    this.personalExpenseForm.reset();
  }

  cancelForm() {
    this.personalExpenseManagement.showForm = false
  }

}
