const Card = (props) => {
  return (
		<div className="cards">
				<h1>
					{props.cardName}: <span className="price">{props.price}</span>
				</h1>
			</div>
	);
}
export default Card