import mongoose from 'mongoose';
const CartSchema= new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [{
        item:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
        }
    }]
}
);


const Cart = mongoose.model('Cart', CartSchema);
export default Cart;    