import React from "react";
import { FlatList, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
	{
		id: 1,
		title: "Red jacket for Sale!",
		price: "$100",
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in great Condition",
		price: "$1000",
		image: require("../assets/couch.jpg"),
	},
];
function ListingScreen() {
	return (
		<Screen>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => {
					<Card
						title={item.title}
						price={item.price}
						image={item.image}
					/>;
				}}
			/>
		</Screen>
	);
}

export default ListingScreen;
