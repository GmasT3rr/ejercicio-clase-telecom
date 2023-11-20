import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ManagerListComponent } from './manager-list.component';
import { ManagerModule } from '../../manager.module';
import { Manager, ManagerService } from 'src/app/services/manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
//OK BASE
// let app: ManagerListComponent;
// let fixture: ComponentFixture<ManagerListComponent>;
// const mockManagerService = jasmine.createSpyObj<ManagerService>([
//   'getManagers',
// ]);

// describe('ManagerListComponent', () => {
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [ManagerModule, RouterTestingModule],
//       providers: [
//         {
//           provide: ManagerService,
//           useValue: mockManagerService,
//         },
//       ],
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(ManagerListComponent);
//         app = fixture.componentInstance;
//       });
//   }));
//   it('should render the component', () => {
//     expect(true).toBe(true);
//   });
// });

let app: ManagerListComponent;
let fixture: ComponentFixture<ManagerListComponent>;
const mockManagerService = jasmine.createSpyObj<ManagerService>([
  'getManagers',
]);

//MOCK
const managers: Manager[] = [
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
];
//

describe('ManagerListComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ManagerModule, RouterTestingModule],
      providers: [
        {
          provide: ManagerService,
          useValue: mockManagerService,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ManagerListComponent);
        app = fixture.componentInstance;
      });
  }));
  it('should render the component', () => {
    expect(true).toBe(true);
  });
  it('should get managers from service', () => {
    mockManagerService.getManagers.and.returnValue(of(managers));
    fixture.detectChanges(); //OnInit
    expect(fixture.componentInstance.managerArray.length).toEqual(3);
  });
  it('should render managers from service', () => {
    mockManagerService.getManagers.and.returnValue(of(managers));
    fixture.detectChanges(); //OnInit
    expect(fixture.componentInstance.managerArray.length).toEqual(3);
    const debugElement = fixture.debugElement;
    const nativeElement = debugElement.nativeElement;
    // let managersLi = nativeElement.querySelectorAll('li');
    //By.css
    let managersLi = debugElement.queryAll(By.css('li'));
    // console.log(managersLi);
    // managersLi = managersLi.nativeElement;
    expect(managersLi.length).toBe(3);
    //Template

    const spanNoManagerDe: HTMLElement = debugElement.query(
      By.css('span, .badge  .badge-primary')
    ).nativeElement;
    // console.log(spanNoManagerDe.textContent);
    expect(spanNoManagerDe.textContent).not.toEqual('Aún no hay gerentes');
  });
  it('should render #NoManager when there is no manager', () => {
    mockManagerService.getManagers.and.returnValue(of([]));
    fixture.detectChanges(); //OnInit
    expect(fixture.componentInstance.managerArray.length).toEqual(0);
    const debugElement = fixture.debugElement;
    const spanNoManagerDe = debugElement.query(
      By.css('span, .badge  .badge-primary')
    );
    // console.log(spanNoManagerDe);
    const p: HTMLElement = spanNoManagerDe.nativeElement;

    expect(p.textContent).toEqual('Aún no hay gerentes');
  });
});
