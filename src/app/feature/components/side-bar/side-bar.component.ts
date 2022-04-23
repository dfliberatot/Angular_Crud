import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  vista = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  info(): void{
    this.vista = 'info';
  }

  agregar(): void{
    this.vista = 'agre';
  }
  Modificar(): void{
    this.vista = 'mod';
  }
  borrar(): void{
    this.vista = 'bor';
  }
}
