import React from "react";
import Screen from "../app/components/Screen";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Link = () => {
	const navigation = useNavigation();

	return (
		<Button
			title="Tweet Details"
			onPress={() => navigation.navigate("TweetDetails")}
		/>
	);
};
const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
);

const Tweetdetails = () => (
	<Screen>
		<Text>Tweet Details </Text>
	</Screen>
);

const Account = () => (
	<Screen>
		<Text>Ayush Rathore</Text>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen name="TweetDetails" component={Tweetdetails} />
	</Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Feed" component={Tweets} />
		<Tab.Screen name="Account" component={Account} />
	</Tab.Navigator>
);
export default Navigator = () => {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
};
