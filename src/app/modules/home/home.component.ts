import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn:boolean = false

  constructor(private rt: Router, private _authService:AuthService) {
  }

  ngOnInit(): void {
    this._authService.$isLoggedIn.subscribe((res:boolean) => {
      this.isLoggedIn = res
    })
  }

  toggleIsLoggedIn(){
    this._authService.toggleIsLoggedIn()
  }

  irAPrueba() {
    this.rt.navigate(['/prueba', 1, 'alumno', 1], {
      state: {
        alumno: {
          id: 1,
          nombre: 'Ian',
          apellido: 'Majkut',
          notas: [1, 2, 3, 4, 5],
        },
      },
    });
  }
}
