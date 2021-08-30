import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ title, price, image }) {
	return (
		<View style={styles.card}>
			<Image source={image} style={styles.image} />
			<View style={styles.details}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.price}>{price}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
		width: "90%",
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		padding: 20,
	},
	title: {
		marginBottom: 10,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
	},
});
export default Card;
