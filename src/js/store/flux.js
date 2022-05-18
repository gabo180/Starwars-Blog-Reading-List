const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://swapi.dev/api",
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			fetchPeople: () => {
				const store = getStore();
				fetch(`${store.apiURL}/people/`)
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.results });
					})
					.then(() => console.log(store.people))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			fetchVehicule: () => {
				const store = getStore();
				fetch(`${store.apiURL}/vehicles/`)
					.then(response => response.json())
					.then(data => {
						setStore({ vehicles: data.results });
					})
					.then(() => console.log(store.vehicles))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			fetchPlanets: () => {
				const store = getStore();
				fetch(`${store.apiURL}/planets/`)
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.then(() => console.log(store.planets))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addToFavorite: itemName => {
				const oldFavorites = getStore().favorites;
				const foundFavorite = oldFavorites.find(item => item === itemName);
				if (foundFavorite) {
					const newArray = oldFavorites.filter(item => item !== foundFavorite); //remove item
					setStore({ favorites: newArray });
				} else {
					setStore({ favorites: [...oldFavorites, itemName] });
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
