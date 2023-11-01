import { useDispatch, useSelector } from "react-redux";
import GameItem from "./GameItem";
import { clearGame } from "../features/game/gameSlice"; 

const GameContainer = () => {
	const dispatch = useDispatch();
	const { gameItems, total, amount } = useSelector((store) => store.game)
	console.log("gameitems = ", gameItems);


        if (amount < 1){
                return (
                        <section className="cart">
                        <header>
                                <h2>Your Game</h2>
                        <h4 className="empty-cart">is currently empty</h4>
                        </header>
                        </section>
                );
        }
        return <section className="cart">
                <header>
                        <h2>Your Games</h2>
                </header>
                <div>
                        {gameItems.map((item) => {
                                return <GameItem key={item.id} {...item} />;
                        })}
                </div>
                <footer>
                        <hr />
                <div className="cart-total">
                        <h4>total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button onClick={() => {dispatch(clearGame())}} className="btn clear-btn">clear games</button>
                </footer>
                </section>
};

export default GameContainer;
