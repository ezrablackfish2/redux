import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import gameReducer from "./features/game/gameSlice";

export const store = configureStore({
	reducer: {
	cart: cartReducer,
	modal: modalReducer,
	game: gameReducer,
	},
});
