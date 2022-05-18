import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = props => {
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
				src="https://cdn-3d.niceshops.com/upload/image/product/medium/default/revell-star-wars-snowspeeder-model-kit-1-pc-312811-en.jpg"
				className="card-img-top"
				alt="..."
				width="200px"
				height="200px"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Model: {props.model}
					<br />
					Manufacturer: {props.manufacturer}
				</p>
				<div className="footer-card">
					<Link to={`/single/vehicle/${props.name}`}>
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

VehicleCard.propTypes = {
	manufacturer: PropTypes.string,
	model: PropTypes.string,
	index: PropTypes.string,
	name: PropTypes.name
};