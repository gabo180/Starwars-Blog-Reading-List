import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //IMPORTANT!!!

export const Navbar = () => {
	const { store, actions } = useContext(Context); //IMPORTANT!!!
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<a href="https://ibb.co/5sCGjbg">
						<img
							src="https://i.ibb.co/nQ461xN/star-wars-icon-png-8-1.png"
							alt="star-wars-icon-png-8-1"
							border="0"
							width="75px"
							height="75px"
						/>
					</a>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button
							button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="itemsAdded">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((fav, index) => {
								return (
									<li><a className="dropdown-item itemFav" href="#" key={index}>
										{fav}
										<i className="fas fa-trash" onClick={() => actions.addToFavorite(fav)} />
									</a></li>
								);
							})}
						</ul>
					</div>
				</div>{" "}
			</nav>
		</>
	);
};

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}