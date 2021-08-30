import React from "react";
import { View, Image, StyleSheet, Button, Alert, Text } from "react-native";

const Exer1 = () => {
	return (
		<>
			<View
				style={{
					flex: 0.4,
					alignItems: "center",
					// backgroundColor: "dodgerblue",
				}}
			>
				<Image
					style={styles.image}
					source={{
						uri: "https://www.freelogovectors.net/wp-content/uploads/2021/08/olx-logo.png",
					}}
				/>
			</View>
			<View
				style={{
					backgroundColor: "#2C3E50",
					flex: 0.6,
					alignItems: "center",
				}}
			>
				<View
					style={{
						justifyContent: "space-around",
						// backgroundColor: "red",
						flex: 1,
						top: 30,
					}}
				>
					<Button
						style={styles.button}
						title="Continue with Phone"
						onPress={() => console.log("Phone")}
					/>
					<Button
						style={styles.button}
						title="Continue with Google"
						onPress={() => console.log("Google")}
					/>
					<Button
						style={styles.button}
						title="Continue with Facebook"
						onPress={() => console.log("Facebook")}
					/>
				</View>
				<View style={{ flex: 1, top: 50 }}>
					<Text style={styles.text}>OR {"\n"} Login with Email</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 100,
		width: 200,
		justifyContent: "center",
		top: 100,
	},
	button: {
		width: 150,
	},
	text: {
		color: "white",
	},
});
export default Exer1;
