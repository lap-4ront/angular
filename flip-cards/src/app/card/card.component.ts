import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit(): void {
  }

  flipCard(innerCard: HTMLDivElement): void {
    innerCard.classList.toggle('transformed')
  }

}
