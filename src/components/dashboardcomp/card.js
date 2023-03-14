const Card = (props) => {
  return (
		<div className="cards">
			<h1>{props.cardName}:</h1>
			{/* <p className="earnings">Your Earnings:</p> */}
			<p className="price">${props.price}</p>
		</div>
	);
}
export default Card