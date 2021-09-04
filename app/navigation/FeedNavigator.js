import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingsDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Listings"
			component={ListingScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="ListingsDetails"
			component={ListingsDetailsScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;
