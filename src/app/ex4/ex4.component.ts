import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
titre="coloriage";
tab=["Arial","Calibri","Times New Roman"];
color:string;
style:string;
modif(val1,val2){
this.color=val1;
this.style=val2;

}
  constructor() { }

  ngOnInit() {
  }

}
