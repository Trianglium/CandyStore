import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products: Product[] = [
    {
      id: '0',
      name: 'Sour Patch Kids',
      image: '/assets/images/product/sourpatchkids.png',
      category: 'sour-candy',
      featured: false,
      label: 'sour',
      price: '6.99',
      // tslint:disable-next-line:max-line-length
      description: "Sour Patch Kids - First they're sour. Then they're sweet. Sour Patch Kids are a fun, soft, and chewy candy for children and adults. They are sweet and chewy and packed with Sour Patch pucker power. Keep everyone satisfied when you bring all your favorite Kids to the party.",
    },
    {
      id: '1',
      name: '49 Assorted Jelly Bean Flavors',
      image: '/assets/images/product/jellybelly49assorted.jpeg',
      category: 'fruity-candy',
      featured: false,
      label: 'fruity',
      price: '11.49',
      // tslint:disable-next-line:max-line-length
      description: "All Jelly Belly beans are OU Kosher, gluten free, peanut free, dairy free, fat free, and vegetarian friendly. Our beans have a 24-month shelf life.  Sold by weight, not volume. At Jelly Belly, your satisfaction is our greatest concern. Jelly Belly candies are made with the finest ingredients, using natural ingredients whenever possible.",
    },
    {
      "id": "2",
      "name": "Strawberry Yogurt Parfait",
      "image": "/assets/images/product/fruitparfaitstrawberry.png",
      "category": "treats",
      "featured": false,
      "label": "fruity",
      "price": "3.97",
      // tslint:disable-next-line:max-line-length
      "description": "The Marketside Yogurt Parfait is available in a tasty 8.5-oz container and has all the ingredients you need to fill up on healthy goodness. It contains vanilla yogurt, fruit and crunchy granola, giving you sweet flavor with a bit of crunch to satisfy your craving. This yogurt granola parfait is an ideal breakfast that you can eat at home or while you are on the go. Each serving is only 70 calories and contains vital nutrients such as fiber, vitamin A, vitamin C, calcium and iron."
    },
    {
      "id": "3",
      "name": "Chocolate Covered Strawberries",
      "image": "/assets/images/product/chocstrawberries.jpg",
      "category": "treats",
      "featured": false,
      "label": "chocolate",
      "price": "3.97",
      // tslint:disable-next-line:max-line-length
      "description": "Milk Chocolate covered, organic strabwerries. Choice of chocolate design."
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
