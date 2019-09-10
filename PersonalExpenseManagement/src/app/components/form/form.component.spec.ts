import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalExpenseManagement } from 'src/app/core/services/personalExpenseManagement.services';
import { formatDate } from '@angular/common';

class mockPersonalExpenseManagement {
  showForm = true;
  ListItems = ['test'];
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
    this.ListItems.reverse();
  }

}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let services: PersonalExpenseManagement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: PersonalExpenseManagement, useClass: mockPersonalExpenseManagement }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    services = TestBed.get(PersonalExpenseManagement);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit', () => {
    component.ngOnInit()
    expect(component.ListItems).toEqual(services.ListItems);
  });

  it('onSubmitForm', () => {
    component.onSubmitForm();
    expect(component.ListItems).toEqual(services.ListItems);

  });

  it('cancelForm', () => {
    expect(services.showForm).toBe(true);
    component.cancelForm()
    expect(services.showForm).toBe(false);
  });
});
