import {ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/game/gameSlice";


const GameItem = ({ id, cover, title, release_date, year, imdb_rating, metascore, certificate, platform, genra}) => {
	const dispatch = useDispatch();

	return (
		<article className="cart-item">
			<img src={cover} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">{year}</h4>
				<button className="remove-btn"
				onClick={() => {
					dispatch(removeItem(id))
				}}>
					remove
				</button>
			</div>
			<div>
				<button 
		className="amount-btn"
		onClick={() => {
			dispatch(increase(id))
		}}
		>
					<ChevronUp />
			</button>
			<p className="amount">{metascore}</p>
			<button 
			className="amount-btn"
			onClick={() => {
				dispatch(decrease(id))
			}}
		>
					<ChevronDown />
			</button>
				</div>
				</article>
	);
}

export default GameItem;
