import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.css']
})
export class Partie1Component implements OnInit {
titre:string="operation tableau";
tab=[15,46,0,89,80];
s:any;
position(s){
  console.log( s);
}
  constructor() { }

  ngOnInit() {
  }

}
