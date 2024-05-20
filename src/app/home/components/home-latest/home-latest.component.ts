import { Component } from '@angular/core';
import { ProductCardMComponent } from '../../../shared/components/product-card-m/product-card-m.component';

@Component({
  selector: 'app-home-latest',
  standalone: true,
  imports: [ProductCardMComponent],
  templateUrl: './home-latest.component.html',
  styleUrl: './home-latest.component.scss'
})
export class HomeLatestComponent {

}
