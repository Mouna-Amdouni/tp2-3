import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4nv',
  templateUrl: './ex4nv.component.html',
  styleUrls: ['./ex4nv.component.css']
})
export class Ex4nvComponent implements OnInit {
val1:number;
  valeur1(event:any){
  console.log(event.target+" "+event.target.value);
  this.val1=event.target.value;
}
valeur2(event:any){
  console.log(event.target+" "+event.target.value);
  this.val2=event.target.value;
}
val2:number;
p:number;
produit(x:any,y:any){
  return this.p=x*y;
}
  constructor() { }

  ngOnInit() {
  }

}
