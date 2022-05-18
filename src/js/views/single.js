import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid, type } = useParams();

	let targetItem = {};

	if (type === "person") {
		targetItem = store.people.find(person => person.name == theid);
	}

	if (type === "planet") {
		targetItem = store.planets.find(planet => planet.name == theid);
	}

	if (type === "vehicle") {
		targetItem = store.vehicles.find(vehicle => vehicle.name == theid);
	}

	const itemProperties = () => {
		let itemProperties = {};
		if (type == "person") {
			(itemProperties.firstProperty = targetItem.name),
				(itemProperties.secondProperty = "Birth Year: " + targetItem.birth_year),
				(itemProperties.thirdProperty = "Gender: " + targetItem.gender),
				(itemProperties.fourthProperty = "Height: " + targetItem.height),
				(itemProperties.fifthProperty = "Hair Color: " + targetItem.hair_color),
				(itemProperties.sixthProperty = "Eye Color: " + targetItem.eye_color);
		}
		if (type == "planet") {
			(itemProperties.firstProperty = targetItem.name),
				(itemProperties.secondProperty = "Population: " + targetItem.population),
				(itemProperties.thirdProperty = "Diameter: " + targetItem.diameter),
				(itemProperties.fourthProperty = "Terrain: " + targetItem.terrain),
				(itemProperties.fifthProperty = "Gravity: " + targetItem.gravity),
				(itemProperties.sixthProperty = "Climate: " + targetItem.climate);
		}
		if (type == "vehicle") {
			(itemProperties.firstProperty = targetItem.name),
				(itemProperties.secondProperty = "Model: " + targetItem.model),
				(itemProperties.thirdProperty = "Cost in credits: " + targetItem.cost_in_credits),
				(itemProperties.fourthProperty = "Vehicle class: " + targetItem.vehicle_class),
				(itemProperties.fifthProperty = "Manufacturer: " + targetItem.manufacturer),
				(itemProperties.sixthProperty = "Cargo capacity: " + targetItem.cargo_capacity);
		}
		return itemProperties;
	};

	console.log("ESTO ES UNA PROPIEDAD!", itemProperties());

	return (
		<div className="container">
			<div>
				<div className="row single-item">
					<div className="col" id="img">
						<img
							src="https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881779/Obi-Wan-Kenobi-Darth-Vader--Luke-Skywalker_800x800_SEPS-1000x1000.jpg"
							alt="star wars"
							width="500"
							height="500"
						/>
					</div>
					<div className="col" id="lorem">
						<h1>{itemProperties().firstProperty}</h1>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien tellus, consequat
							vitae pulvinar non, fringilla in diam. Aliquam viverra finibus elementum. Sed ipsum risus,
							volutpat ac sollicitudin eget, aliquam nec urna. Sed feugiat nec sapien vel consectetur.
							Morbi rhoncus fringilla odio eget semper. Fusce mattis non velit vel hendrerit. Nam nec
							sagittis.
						</h4>
					</div>
					<hr />
					<div />
					<div className="row">
						<div className="col">
							<h2>{"Name: " + itemProperties().firstProperty}</h2>
						</div>
						<div className="col">
							<h2>{itemProperties().secondProperty}</h2>
						</div>
						<div className="col">
							<h2>{itemProperties().thirdProperty}</h2>
						</div>
						<div className="col">
							<h2>{itemProperties().fourthProperty}</h2>
						</div>
						<div className="col">
							<h2>{itemProperties().fifthProperty}</h2>
						</div>
						<div className="col">
							<h2>{itemProperties().sixthProperty}</h2>
						</div>
					</div>
				</div>
				{/* <h2 className="display-4">{itemProperties().firstProperty}</h2>
			<h2 className="display-4">{itemProperties().secondProperty}</h2>
			<h2 className="display-4">{itemProperties().thridProperty}</h2>
			<hr className="my-4" />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
