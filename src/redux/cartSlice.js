import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if item is already in cart to prevent duplicate
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      // if the item is in our array
      // we increase it's quantity
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantityInCart += 1;
        toast.success(`increased ${action.payload.title} quantity`, {
          position: "bottom-left",
        });
      } else {
        // we add it the cart item to the cart
        const newItem = { ...action.payload, itemQuantityInCart: 1 };
        state.cartItems.push(newItem);
        toast.success(`added ${action.payload.title} to cart`, {
          position: "bottom-left",
        });
      }

      // adding our cartItems to the local storage.
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteCartItem: (state, action) => {
      const newcart = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = newcart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.title} has been removed from cart`, {
        position: "bottom-left",
      });
    },
    increaseQuantityInCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      state.cartItems[itemIndex].itemQuantityInCart += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.success(`Increased ${action.payload.title} Quantity`, {
        position: "bottom-left",
      });
    },
    decreaseQuantityInCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].itemQuantityInCart > 1) {
        state.cartItems[itemIndex].itemQuantityInCart -= 1;
        toast.success(`Decreased ${action.payload.title} Quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].itemQuantityInCart === 1) {
        const newCartItem = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = newCartItem;
        toast.error(`Removed ${action.payload.title} from Cart`, {
          position: "bottom-left",
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`Cart has been cleared`, {
        position: "bottom-left",
      });
    },
    getTotal: (state, action) => {
      let { total, totalItemsInCart } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuantityInCart } = cartItem;
          const itemTotal = price * itemQuantityInCart;

          cartTotal.total += itemTotal;
          cartTotal.totalItemsInCart += itemQuantityInCart;

          return cartTotal;
        },
        {
          total: 0,
          totalItemsInCart: 0,
        }
      );

      state.cartQuantity = totalItemsInCart;
      state.cartTotal = total;
    },
  },
});

export const {
  addToCart,
  deleteCartItem,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
