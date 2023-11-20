import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager, ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css'],
})
export class ManagerListComponent implements OnInit {
  managerArray: Manager[] = [];
  //Observable
  // managerArray$!: Observable<Manager[]>;
  constructor(private managerService: ManagerService) {
    // this.managerArray$ = this.managerService.getManagers();
  }
  ngOnInit(): void {
    //Normal
    // this.managerService
    //   .getManagers()
    //   .subscribe((res) => (this.managerArray = res));
    this.managerService.getManagers().subscribe({
      next: (value) => {
        // console.log('succes', value);
        this.managerArray = value;
      },
      error: (err) => {
        // console.log('errr', err);
        this.managerArray = [];
      },
    });
  }
}
