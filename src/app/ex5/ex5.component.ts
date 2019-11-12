import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {
  etudiants =[ {nom:'Ben Ali', prenom:'Ahmed', date:new Date(1980,4,15), ville:'Tunis', moyenne:12.37},
   {nom:'Rajhi', prenom:'Samar', date:new Date(2000,6,23), ville:'Sfax', moyenne:15.87},
    {nom:'Ammar', prenom:'Ali', date:new Date(2003,7,10), ville:'Tunis', moyenne:10.3}, 
  {nom:'Smiri', prenom:'Maroua', date:new Date(2001,1,11), ville:'Nabeul', moyenne:16.3} ]
 classe1="c1";
 classe2="c2";
 
 
  constructor() { }

  ngOnInit() {
  }

}
