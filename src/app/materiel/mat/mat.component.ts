import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent implements OnInit {
@Input()nom:string;
@Input()ref:string;
@Input()val1:number;
@Input()etat:any;
changer(){
if (this.etat=="endommagé"){
  this.etat="reparé"
}

}
verif(){
  if (this.etat=="endommagé"){
    return true;
  }
}
  constructor() { }

  ngOnInit() {
  }

}
