import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen() {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.closeIcon}>
					<MaterialCommunityIcons
						name="close"
						color="white"
						size={30}
					/>
				</View>
				<View style={styles.deleteIcon}>
					<MaterialCommunityIcons
						name="trash-can-outline"
						color="white"
						size={30}
					/>
				</View>
				<Image
					resizeMode="contain"
					source={require("../assets/chair.jpg")}
					style={styles.image}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		flex: 1,
	},
	closeIcon: {
		width: 30,
		height: 30,
		position: "absolute",
		top: 20,
		left: 20,
	},
	deleteIcon: {
		width: 30,
		height: 30,
		position: "absolute",
		top: 20,
		right: 20,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;
