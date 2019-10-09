import { ActionTypes } from '../actions/cart.action'
import { ActionModel } from '../models/action.model'
import { CartModel } from '../models/cart.model'
import { ProductModel } from '../models/product.model'

export const cart = new CartModel();

export function cartReducer(
    state = cart,
    action = new ActionModel,
) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.products.push(action.payload);
                state.total = calculateTotal(state.products)

                console.log(state);
                return state;
            }
        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload);
                state.products.splice(index, 1);
                state.total = calculateTotal(state.products)

                console.log(state);
                return state
            }
        case ActionTypes.Clear:
            {
                state = new CartModel();
                state.total = calculateTotal(state.products)

                console.log(state);
                return state
            }
        default:
            return state;
    }
}

function calculateTotal(products: ProductModel[]): number {
    let total: number = 0;

    products.forEach(p => {
        total += p.price
    });

    return total;

}