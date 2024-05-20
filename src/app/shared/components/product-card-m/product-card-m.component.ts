import { Component } from '@angular/core';
import { ICardProduct } from '../interfaces/card-product-interface';

@Component({
  selector: 'app-product-card-m',
  standalone: true,
  imports: [],
  templateUrl: './product-card-m.component.html',
  styleUrl: './product-card-m.component.scss'
})
export class ProductCardMComponent {

  cardProducts: ICardProduct[];

  constructor() {
    this.cardProducts = [
      {
        image: '../../../../assets/mock-data-img/Img06.jpeg',
        title: 'Lira Earrings',
        price: '27,00',
        likeCheck: false,
      },
      {
        image: '/assets/mock-data-img/Img01.jpeg',
        title: 'Hal Earrings',
        price: '25,00',
        likeCheck: false,
      },
      {
        image: '/assets/mock-data-img/Img02.jpeg',
        title: 'Kaede Hair Pin Set Of 3 ',
        price: '30,00',
        likeCheck: false,
      },
      {
        image: '/assets/mock-data-img/Img03.jpeg',
        title: 'Hair Pin Set of 3',
        price: '30,00',
        likeCheck: false,
      },
      {
        image: '/assets/mock-data-img/Img04.jpeg',
        title: 'Plaine Necklace',
        price: '19,00',
        likeCheck: false,
      },
      {
        image: '/assets/mock-data-img/Img05.jpeg',
        title: 'Yuki Hair Pin Set of 3',
        price: '29,00',
        likeCheck: false,
      },
    ]
  }
}
