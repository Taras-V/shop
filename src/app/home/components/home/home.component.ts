import { Component } from '@angular/core';
import { HomeLatestComponent } from '../home-latest/home-latest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeLatestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
