import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
etudiant={nom:"ali",moyenne:8};
tabb=["RSI","DSI","SEM"];
titre:string="orientation etudiant";
choix="DSI";
  constructor() { }

  ngOnInit() {
  }

}
