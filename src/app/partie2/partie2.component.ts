import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.css']
})
export class Partie2Component implements OnInit {
tab=[0,4,2,7,14,5,13];
titre:string="affichage des elements pairs du tableau";
position(pos:any){
console.log(pos);

}
  constructor() { }

  ngOnInit() {
  }

}
