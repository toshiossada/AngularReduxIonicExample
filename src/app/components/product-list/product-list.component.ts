import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { CartModel } from 'src/app/models/cart.model'
import { Add } from 'src/app/actions/cart.action'
import { DataService } from 'src/app/data.service'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: any[] = null

  constructor(
    private store: Store<CartModel>,
    private toastController: ToastController,
    private service: DataService
  ) {

  }

  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });

  }

  async add(product) {
    this.store.dispatch(Add(product))
    const toast = await this.toastController.create({
      message: `${product.title} adicionado ao carrinho`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'OK'
    })

    toast.present()
  }

}
