import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image
				source={require("../assets/jacket.jpg")}
				style={styles.image}
			/>
			<View style={styles.details}>
				<AppText style={styles.title}>Red Jacket for Sale!</AppText>
				<AppText style={styles.price}>$500</AppText>
				<View style={styles.user}>
					<ListItem
						image={require("../assets/ayush.jpg")}
						title="Ayush Rathore"
						description="7 Items"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	details: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	user: {
		marginTop: 20,
	},
});
export default ListingDetailsScreen;
