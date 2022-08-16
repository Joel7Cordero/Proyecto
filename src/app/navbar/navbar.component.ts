import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
  goToReactive(){
    this.router.navigate(['contact-reactive'], {queryParams: {name:'Joel'}});
  }
  goToTemplate(){
    this.router.navigate(['contact-template','580']);
  }

}
