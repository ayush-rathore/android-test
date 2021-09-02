import React, { useEffect, useState } from "react";
import Screen from "../app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";

function Imagepicker(props) {
	const [imageUri, setImageUri] = useState();
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) alert("You need to enable the camera permissions");
	};
	useEffect(() => {
		requestPermission();
	}, []);
	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) setImageUri(result.uri);
		} catch (error) {
			console.error("Error reading the image", error);
		}
	};
	return (
		<Screen>
			<Button title="Select Image" onPress={selectImage} />
			<Image
				source={{ uri: imageUri }}
				style={{ width: 200, height: 200 }}
			/>
		</Screen>
	);
}

export default Imagepicker;
