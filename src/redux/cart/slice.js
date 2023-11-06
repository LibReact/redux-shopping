import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // verifica se o produto já está no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            )
            // se ele estiver, aumentar a sua quantidade em 1
            if(productIsAlreadyInCart) {
                state.products = state.products.map((product) => 
                product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product 
                );

                return;
            }
            // se ele não estiver, adicioná-lo
            state.products = [...state.products, {...action.payload, quantity: 1}]
        },
        increaseProductQuantity: (state, action) => {
            state.products = state.products.map((product) => 
                product.id === action.payload 
                ? {...product, quantity: product.quantity + 1 }
                : product
            )
            
        },
        decreaseProductQuantity: (state, action) => {
            state.products = state.products.map((product) => 
                product.id === action.payload
                ? {...product, quantity: product.quantity -1 }
                : product
            ).filter((product) => product.quantity > 0)
            
        },
        // pega todos os produtos que te o ID diferente que está recebendo. Remove o produto que está sendo clicado
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            )
        }
    }
})

export const { 
    addProduct,  
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
} = cartSlice.actions

export default cartSlice.reducer 