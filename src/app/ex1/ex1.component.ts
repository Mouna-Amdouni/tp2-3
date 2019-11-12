import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
titre:string="liste des profils";
profils=["admin", "User", "Visitor"];
profil="Visitor";  
constructor() { }

  ngOnInit() {
  }

}
