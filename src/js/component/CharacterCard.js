import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(
		() => {
			setIsFavorite(store.favorites.includes(props.name));
		},
		[store.favorites]
	);

	// const isFavorite = () => store.favorites.includes(props.name)

	return (
		<div className="card" style={({ width: "18rem" }, { height: "100%" })}>
			<img
				src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768"
				className="card-img-top"
				alt="..."
				width="200px"
				height="200px"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Gender: {props.gender}
					<br />
					Hair Color: {props.hair}
					<br />
					Eye-Color: {props.eye}
				</p>
				<div className="footer-card">
					<Link to={`/single/person/${props.name}`}>
						<button className="btn btn-primary">Learn more</button>
					</Link>
					<button
						className="btn btn-light"
						onClick={() => {
							actions.addToFavorite(props.name);
						}}>
						<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	gender: PropTypes.string,
	eye: PropTypes.string,
	hair: PropTypes.string,
	name: PropTypes.string,
	index: PropTypes.string
};