import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import GameContainer from "./components/GameContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
import { getGameItems } from "./features/game/gameSlice";



function App() {
	const {cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems])
	useEffect(() => {
		dispatch(getCartItems("ezra"));
	}, [])
	useEffect(() => {
		dispatch(getGameItems("dsaf6fdsp8af6ds7a8"));
	}, [])


	if (isLoading) {
		return <div className="loading">
			<h1>Loading...</h1></div>
	}

  return (
	  <main>
	  { isOpen && <Modal />}
	  <Navbar />
	  <GameContainer />
	  <CartContainer />
	  </main>
  )
}
export default App;
