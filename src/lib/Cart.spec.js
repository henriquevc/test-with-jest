import Cart from './Cart'

describe(`Cart`, () => {
    let cart
    let product = {
        title: 'chiclete bubbaloo',
        price: 35388 // 353.88
    }
    let product2 = {
        title: 'Leite condensado',
        price: 16200 // 162.00
    }

    beforeEach(() => {
        cart = new Cart()
    })

    it('should return 0 when getTotal() is executed in a newly created instace', () => {
        expect(cart.getTotal()).toEqual(0)
    })

    it('should multiply quantity and price and receive the total amount', () => {
        const item = {
            quantity: 2, //35388 * 2 = 70776
            product
        }

        cart.add(item)
        
        expect(cart.getTotal()).toEqual(70776)
    })

    it('should ensure no more than on product exists at a time', () => {
        cart.add({
            quantity: 2,
            product
        })
        cart.add({
            quantity: 1,
            product
        })

        expect(cart.getTotal()).toEqual(35388)
    })

    it('should update total when a product gets included and then removed', () => {
        cart.add({
            quantity: 2,
            product
        })

        cart.add({
            quantity: 1,
            product: product2
        })
        
        cart.remove(product)

        expect(cart.getTotal()).toEqual(16200)
    })
})