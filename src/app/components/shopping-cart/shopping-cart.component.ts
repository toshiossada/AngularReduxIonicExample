import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { CartModel } from 'src/app/models/cart.model'
import { Remove, Clear } from 'src/app/actions/cart.action'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>,
    private alertController: AlertController,
  ) {
    this.cart$ = store.pipe(select('cart'))
  }

  ngOnInit() { }

  remove(item) {
    this.store.dispatch(Remove(item))
  }
  reset(item) {
    this.store.dispatch(Clear())
  }

  async presentRemoveConfirm(item) {
    const alert = await this.alertController.create({
      header: 'Remover item',
      message: `Deseja remover o item ${item.title}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Remover',
          handler: () => {
            this.remove(item)
          }
        }
      ]
    })

    await alert.present()
  }

}
