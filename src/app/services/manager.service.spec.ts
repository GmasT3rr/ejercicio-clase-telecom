import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Manager, ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';

let service: ManagerService;
let httpTestingController: HttpTestingController;
describe('ManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ManagerService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all managers', () => {
    service.getManagers().subscribe({
      next: (value) => {
        expect(value).toBeTruthy();
        expect(value.length).toBe(3);
      },
    });
    const req = httpTestingController.expectOne(
      'http://localhost:3000/managers'
    );
    expect(req.request.method).toEqual('GET');

    req.flush([
      {
        id: 101,
        firstName: 'John',
        lastName: 'Doe',
        country: 'United States',
        employees: [
          {
            employeeId: 1,
          },
          {
            employeeId: 2,
          },
          {
            employeeId: 3,
          },
        ],
      },
      {
        id: 102,
        firstName: 'Jane',
        lastName: 'Smith',
        country: 'Canada',
        employees: [
          {
            employeeId: 4,
          },
          {
            employeeId: 5,
          },
        ],
      },
      {
        id: 103,
        firstName: 'Alicia',
        lastName: 'Martinez',
        country: 'Spain',
        employees: [
          {
            employeeId: 6,
          },
          {
            employeeId: 7,
          },
        ],
      },
    ]);
  });

  it('should get a manager by id', () => {
    service.getManagerById(101).subscribe({
      next: (value) => {
        expect(value).toBeTruthy();
        expect(value.id).toBe(101);
      },
    });
    const req = httpTestingController.expectOne(
      'http://localhost:3000/managers/101'
    );
    expect(req.request.method).toEqual('GET');

    req.flush({
      id: 101,
      firstName: 'John',
      lastName: 'Doe',
      country: 'United States',
      employees: [
        {
          employeeId: 1,
        },
        {
          employeeId: 2,
        },
        {
          employeeId: 3,
        },
      ],
    });
  });
});
