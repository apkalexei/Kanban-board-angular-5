import { Component, Input, OnInit } from '@angular/core';
import { CardSchema } from '../cardschema';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardSchema;
  selectCard: CardSchema;
  displayCard = true;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplayCard() {
    this.displayCard = !this.displayCard;
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  onSelectCard(card: CardSchema): void {
    this.selectCard = card;
  }
}
