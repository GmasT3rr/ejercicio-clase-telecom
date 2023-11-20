import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, from } from 'rxjs';
import { Employee } from 'src/app/modules/employee/pages/employee/employee.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { Manager, ManagerService } from 'src/app/services/manager.service';
import { ManagerComponent } from './manager.component';
import { ManagerModule } from '../../manager.module';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

let component: ManagerComponent;
let fixture: ComponentFixture<ManagerComponent>;
// let mockManagerService: ManagerService;
let mockManagerService = jasmine.createSpyObj<ManagerService>([
  'getManagerById',
  'getManagers',
]);
// let mockEmployeeService: EmployeeService;
let mockEmployeeService = jasmine.createSpyObj<EmployeeService>([
  'getEmployeeById',
  'getEmployees',
]);
// let mockActivatedRoute: ActivatedRoute;

//MOCK
const managerData: Manager = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  country: 'USA',
  employees: [{ employeeId: 1 }, { employeeId: 2 }, { employeeId: 3 }],
};

const employeeData1: Employee = {
  id: 1,
  firstName: 'Lucas',
  lastName: 'Ramallo',
  country: 'Argentina',
  salary: 2000,
};
const employeeData2: Employee = {
  id: 2,
  firstName: 'Franco',
  lastName: 'Ramirez',
  country: 'Venezuela',
  salary: 2500,
};
const employeeData3: Employee = {
  id: 3,
  firstName: 'Pablo',
  lastName: 'Escobar',
  country: 'Colombia',
  salary: 3000,
};
//
describe('ManagerComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ManagerModule, RouterTestingModule],
      providers: [
        {
          provide: ManagerService,
          useValue: mockManagerService,
        },
        {
          provide: EmployeeService,
          useValue: mockEmployeeService,
        },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } },
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ManagerComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
      });
  }));

  it('should render the component', () => {
    expect(true).toBe(true);
  });

  it('should get managers and employees from service', () => {
    mockManagerService.getManagerById.and.returnValue(of(managerData));
    mockEmployeeService.getEmployeeById.and.returnValues(
      of(employeeData1),
      of(employeeData2),
      of(employeeData3)
    );
    fixture.detectChanges(); //OnInit
    expect(fixture.componentInstance.manager).toEqual(managerData);
    expect(fixture.componentInstance.employees).toEqual([
      employeeData1,
      employeeData2,
      employeeData3,
    ]);
  });

  it('should render the manager with employees', () => {
    mockManagerService.getManagerById.and.returnValue(of(managerData));
    mockEmployeeService.getEmployeeById.and.returnValues(
      of(employeeData1),
      of(employeeData2),
      of(employeeData3)
    );
    fixture.detectChanges();
    expect(fixture.componentInstance.manager).toEqual(managerData);
    expect(fixture.componentInstance.employees).toEqual([
      employeeData1,
      employeeData2,
      employeeData3,
    ]);

    //Template
    const debugElement = fixture.debugElement;
    const nativeElement = debugElement.nativeElement;
    const listItem = debugElement.queryAll(
      By.css('li, .list-group-item .span')
    );
    //Nombre
    expect(listItem[0].nativeElement.textContent).toBe(
      `Nombre: ${managerData.firstName} `
    );
    //Apellido
    expect(listItem[1].nativeElement.textContent).toBe(
      `Apellido: ${managerData.lastName} `
    );
    //Pais
    expect(listItem[2].nativeElement.textContent).toBe(
      `Pais: ${managerData.country} `
    );
    //Empleados IDs
    // expect(listItem[3].nativeElement.query).to(
    //   `Empleados:  Id: ${managerData.employees[0].employeeId}  Id: ${managerData.employees[1].employeeId}  Id: ${managerData.employees[2].employeeId}  `
    // );
    // console.log(listItem[3].nativeElement.querySelectorAll(' #employeeId'));
    //Ids
    let spanEmployeeId =
      listItem[3].nativeElement.querySelectorAll(' #employeeId');
    expect(spanEmployeeId[0].textContent).toBe('Id: 1');
    expect(spanEmployeeId[1].textContent).toBe('Id: 2');
    expect(spanEmployeeId[2].textContent).toBe('Id: 3');
    //Employee data
    let spanEmployeeData =
      listItem[4].nativeElement.querySelectorAll(' #employeeData');
    // console.log(spanEmployeeData);
    expect(spanEmployeeData[0].textContent).toBe(
      `${employeeData1.firstName} ${employeeData1.lastName} ${employeeData1.salary}`
    );
    expect(spanEmployeeData[1].textContent).toBe(
      `${employeeData2.firstName} ${employeeData2.lastName} ${employeeData2.salary}`
    );
    expect(spanEmployeeData[2].textContent).toBe(
      `${employeeData3.firstName} ${employeeData3.lastName} ${employeeData3.salary}`
    );
    expect(listItem.length).toBe(5);
  });
});
