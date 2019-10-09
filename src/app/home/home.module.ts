import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    ProductListComponent,
    ShoppingCartComponent,
  ]
})
export class HomePageModule { }
