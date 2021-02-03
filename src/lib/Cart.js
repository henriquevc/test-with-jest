import find from 'lodash/find'
import remove from 'lodash/remove'

export default class Cart {

    items = []

    add (item) {
        const itemTofind = { product: item.product }

        if (find(this.items, itemTofind)) {
            remove(this.items, itemTofind)
        }

        this.items.push(item)
    }

    remove (product) {
        remove(this.items, {product})
    }

    getTotal() {
        return this.items.reduce((acc, item) => {
            return acc + item.quantity * item.product.price
        }, 0)
    }



}