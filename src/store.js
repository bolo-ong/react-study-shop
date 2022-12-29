import { configureStore, createSlice } from '@reduxjs/toolkit'


// let user = createSlice({
//     name: 'user',
//     initialState: 'kim',
//     reducers: {
//         changeName(state) {
//             return `john${state}`
//         }
//     }
// })
// export let { changeName } = user.actions

// let stock = createSlice({
//     name: 'stock',
//     initialState: [10, 11, 12]
// })

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addQty(state, action) {
            state.forEach((data) => {
                if (data['id'] === action.payload) {
                    data['count'] += 1
                }
            })
        },
        addCart(state, action) {
            let newItem = action.payload
            let arrId = []

            state.forEach((data, i) => {
                if (data['id'] === newItem['id']) {
                    data['count'] += 1
                }
            })

            state.forEach((data, i) => {
                arrId.push(data['id'])
            })

            if (!arrId.includes(newItem['id'])) {
                state.push({ id: newItem['id'], name: newItem['title'], count: 1 })
            }
        }
    }
})
export let { addQty, addCart } = cart.actions


export default configureStore({
    reducer: {
        // user: user.reducer,
        // stock: stock.reducer,
        cart: cart.reducer
    }
}) 