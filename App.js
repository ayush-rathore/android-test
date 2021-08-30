import React, { useState } from "react";
import { View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Electronics", value: 3 },
];
const App = () => {
	console.log("App Started!");
	// const [category, setcategory] = useState();
	return (
		<WelcomeScreen />
		// <ViewImageScreen />
		// <ListingDetailsScreen />
		// <MessageScreen />
		// <AccountScreen />
		// <ListingScreen />
		// <AppTextInput placeholder="Username" icon="email" />
		// <Screen>
		// 	<AppPicker
		// 		items={categories}
		// 		placeholder="Category"
		// 		icon="apps"
		// 		selectedItem={category}
		// 		onSelectItem={(item) => setcategory(item)}
		// 	/>
		// 	<AppTextInput placeholder="Email" icon="email" />
		// </Screen>
		//
		// <ListingEditScreen />
	);
};

export default App;
