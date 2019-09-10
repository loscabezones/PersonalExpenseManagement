import { TestBed } from '@angular/core/testing';

import { PersonalExpenseManagement } from './personalExpenseManagement.services';
import { formatDate } from '@angular/common';

describe('PersonalExpenseManagement', () => {

  let service: PersonalExpenseManagement;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    service = new PersonalExpenseManagement();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('FormatDate with data exist', () => {
    const date = new Date('Tue Sep 10 2019');
    expect(service.formatDate(date)).toBe('10/09/2019');
  });

  it('FormatDate no data', () => {
    const date = '';
    const result = formatDate(new Date(), 'dd/MM/yyyy', 'en').toString();
    expect(service.formatDate(date)).toBe(result);
  });

  it('OrderArray', () => {
    service.ListItems = [
      {
        fecha: '11/22/2019'
      },
      {
        fecha: '15/22/2019'
      }
    ]

    const result = [
      {
        fecha: '15/22/2019'
      },
      {
        fecha: '11/22/2019'
      }
    ]
    service.orderArray()
    expect(service.ListItems).toEqual(result);
  });

  it('Recoverage localstorage', () => {
    const result = [
      {
        fecha: '15/22/2019'
      },
      {
        fecha: '11/22/2019'
      }
    ]

    localStorage.setItem("List", JSON.stringify(result));

    expect(service.ListItems).toEqual(result);

  });


});
