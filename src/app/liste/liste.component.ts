import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  {
  onomatopoeiaList: string[] = ['Meuh', 'Miaou', 'Coin-coin'];
  constructor() { }

  ngOnInit() {
  }
  onReceiveNewOnomatopia(newOnomatopia: string) {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
