import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalExpenseManagement } from 'src/app/core/services/personalExpenseManagement.services';

class mockPersonalExpenseManagement {
  showForm = false;
  ListItems = ['test'];
}

fdescribe('FormComponent', () => {
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
});
