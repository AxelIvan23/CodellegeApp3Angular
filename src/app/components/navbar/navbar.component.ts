import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  Navegar(index) {
  		this._router.navigate(['/products/', index]);
  }

  Search(searchValue) {
  		this._router.navigate(['/resultado/',searchValue]);
  }
}
