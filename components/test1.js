import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Touchable,
	TouchableNativeFeedback,
} from "react-native";

console.group("App executed!");
const Test1 = () => {
	return (
		<View style={styles.container}>
			<Text onPress={() => console.log("Text clicked!")}>
				Hey! My first React Native App.
			</Text>
			{/* <TouchableWithoutFeedback
				onPress={() => console.log("Image Clicked!")}
			>
				<Image
					fadeDuration={1000}
					source={{
						uri: "https://picsum.photos/200",
						height: 200,
						width: 200,
					}}
				/>
			</TouchableWithoutFeedback> */}
			<TouchableOpacity onPress={() => console.log("Image clicked!")}>
				<Image
					fadeDuration={1000}
					source={{
						uri: "https://picsum.photos/200",
						height: 200,
						width: 200,
					}}
				/>
			</TouchableOpacity>
			<TouchableNativeFeedback>
				<View
					style={{
						height: 50,
						width: 200,
						backgroundColor: "#039BE5",
					}}
				>
					<Text
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						Hello World
					</Text>
				</View>
			</TouchableNativeFeedback>
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

export default Test1;
