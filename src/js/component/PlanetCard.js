import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(
		() => {
			setIsFavorite(store.favorites.includes(props.name));
		},
		[store.favorites]
	);

	return (
		<div className="card" style={({ width: "18rem" }, { height: "100%" })}>
			<img
				src="https://pm1.narvii.com/6602/64da297fad3769371c760c5b59f617c4d1be7e5c_hq.jpg"
				className="card-img-top"
				alt="..."
				width="200px"
				height="200px"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Population: {props.population}
					<br />
					Terrain: {props.terrain}
				</p>
				<div className="footer-card">
					<Link to={`/single/planet/${props.name}`}>
						<button className="btn btn-primary">Learn more</button>
					</Link>
					<button
						className="btn btn-light"
						onClick={() => {
							actions.addToFavorite(props.name);
							// setIsActive(!isActive);
						}}>
						<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	population: PropTypes.string,
	terrain: PropTypes.string,
	index: PropTypes.string,
	name: PropTypes.name
};
