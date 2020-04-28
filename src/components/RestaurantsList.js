import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import RestaurantDetails from "./RestaurantDetails";
import { withNavigation} from "react-navigation";

const RestaurantsList = ({title, restaurants, navigation}) => {

    if(!restaurants.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                // horizontal={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurants) => restaurants.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantShow', {id: item.id})}>
                            <RestaurantDetails restaurant={item}/>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(RestaurantsList);
