import { Component } from '@angular/core'
import { IProduct } from './models/product'
import {product as data} from './data/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lesson';


products: IProduct[] = data

}
