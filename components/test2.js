import React from "react";
import { StatusBar } from "expo-status-bar";

import { Button, StyleSheet, Alert, View } from "react-native";

console.group("App executed!");
const Test2 = () => {
	return (
		<View style={styles.container}>
			<Button
				title="Greet"
				onPress={() =>
					Alert.alert("Greetings", "Hello There!", [
						{
							text: "Thank You",
							onPress: () => console.log("Thank You"),
						},
						{ text: "Nice to see you" },
					])
				}
			/>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Test2;
