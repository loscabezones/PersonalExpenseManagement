import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { PersonalExpenseManagement } from 'src/app/core/services/personalExpenseManagement.services';

class mockPersonalExpenseManagement {
  showForm = false;
  ListItems = ['test'];
}
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let services: PersonalExpenseManagement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        { provide: PersonalExpenseManagement, useClass: mockPersonalExpenseManagement}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    services = TestBed.get(PersonalExpenseManagement);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit', () => {
    component.ngOnInit()
    expect(component.listItems).toEqual(services.ListItems);
  });

  it('Function ShowForm', () => {
    expect(services.showForm).toBeFalsy();
    component.ShowForm();
    expect(services.showForm).toBeTruthy();
  });

});
