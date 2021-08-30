import React from "react";
import { View, Text } from "react-native";

const Flex = () => {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<View
				style={{
					backgroundColor: "#FFB300",
					height: 100,
					width: 100,
				}}
			/>
			<View
				style={{
					backgroundColor: "dodgerblue",
					height: 100,
					width: 100,
				}}
			/>
			<View
				style={{
					backgroundColor: "tomato",
					height: 100,
					width: 100,
				}}
			/>
		</View>
	);
};

export default Flex;
