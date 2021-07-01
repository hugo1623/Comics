import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
   
@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styles: [
  ]
})
export class DcComponent implements OnInit {

  constructor( private _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

}
