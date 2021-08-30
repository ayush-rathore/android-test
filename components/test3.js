import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Platform } from "react-native";

console.log("App executed!");

const Test3 = () => {
	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingTop: Platform.OS === "android" ? 20 : 0,
		justifyContent: "center",
	},
});
export default Test3;
