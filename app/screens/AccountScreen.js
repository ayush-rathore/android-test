import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

const menuItems = [
	{
		title: "My Items",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: "Messages",
	},
];

function AccountScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Ayush Rathore"
					description="heyfreaker@gmail.com"
					image={require("../assets/ayush.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							// ImageComponent={
							// 	<Icon
							// 		icon={item.icon.name}
							// 		backgroundColor={item.icon.backgroundColor}
							// 	/>
							// }
							onPress={() =>
								navigation.navigate(item.targetScreen)
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Log Out"
				// ImageComponent={
				// 	<Icon icon="logout" backgroundColor="#ffe66d" />
				// }
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});

export default AccountScreen;
