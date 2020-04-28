import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const RestaurantShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [restaurant, setRestaurant] = useState(null)

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        setRestaurant(response.data);
    };

    useEffect(() => {
        getRestaurant(id);
    }, []);

    if (!restaurant) {
        return null;
    }

    return (
        <View>
            <Text style={styles.name}> {restaurant.name} </Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    name:{
      alignSelf: 'center',
        fontSize: 18,
        marginVertical: 10
    },
    image: {
        height: 200,
        width: 300,
        marginVertical: 10,
        borderRadius: 5,
        alignSelf: 'center'
    }
});

export default RestaurantShowScreen;
