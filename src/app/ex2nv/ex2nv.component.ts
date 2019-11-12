import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2nv',
  templateUrl: './ex2nv.component.html',
  styleUrls: ['./ex2nv.component.css']
})
export class Ex2nvComponent implements OnInit {
  val1:any;
valeur1(event:any){
  console.log(event.target+" "+event.target.value);
  this.val1=event.target.value;
}
p:any;
carr(x:any){
  return this.p=x*x;
}
s:number=6;
somme(x:number,y:number){
 this.s+=x;
 console.log(this.s);
}
  constructor() { }

  ngOnInit() {
  }

}
