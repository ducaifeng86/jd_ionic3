import { Component } from '@angular/core';

import { CategoryPage } from '../category/category';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = CartPage;
  tab4Root = MyPage;

  constructor() {

  }
}
