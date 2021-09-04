import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

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
		price: "$500",
		image: require("../assets/couch.jpg"),
	},
];
function ListingScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						price={item.price}
						image={item.image}
						onPress={() =>
							navigation.navigate("ListingsDetails", item)
						}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
});

export default ListingScreen;
