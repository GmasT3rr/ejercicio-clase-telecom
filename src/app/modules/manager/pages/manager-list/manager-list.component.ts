import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager, ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css'],
})
export class ManagerListComponent {
  managerArray: Manager[] = [];
  //Observable
  // managerArray$!: Observable<Manager[]>;
  constructor(private managerService: ManagerService) {
    //Normal
    this.managerService
      .getManagers()
      .subscribe((res) => (this.managerArray = res));
    Observable;
    // this.managerArray$ = this.managerService.getManagers();
  }
}
