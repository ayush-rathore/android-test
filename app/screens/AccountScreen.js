import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

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
	},
];
function AccountScreen() {
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
					keyExtractor={(item) => item.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							ImageComponent={
								<Icon
									icon={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					title="Logout"
					ImageComponent={
						<Icon icon="logout" backgroundColor="#ffe66d" />
					}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: "#EEEEEE",
	},
});
export default AccountScreen;
