import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

console.log(Dimensions.get("screen"));
const Test4 = () => {
	console.log(useDimensions());
	return (
		<View style={styles.container}>
			<Text>Hello World</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default Test4;
