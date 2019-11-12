import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amal',
  templateUrl: './amal.component.html',
  styleUrls: ['./amal.component.css']
})
export class AmalComponent implements OnInit {
c:any;
choix:any;
police:any;
pol:any;
  valeur1(event:any){
  console.log(event.target+" "+event.target.value);
this.c=event.target.value;
}
couleur:any;
changer(couleur,police){
  this.c=couleur;
this.pol=police;
}
  constructor() { }

  ngOnInit() {
  }

}
