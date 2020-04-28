import React from 'react';
import {StyleSheet, Image, Text, View, TextInput} from 'react-native';

const RestaurantDetails = ({restaurant}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
            source={{ uri: restaurant.image_url ? restaurant.image_url : 'https://s3-media3.fl.yelpcdn.com/bphoto/2BK_JnoxlyLQgCk5FOEqog/o.jpg' }}/>
            <Text style={styles.name}> {restaurant.name} </Text>
            <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
});

export default RestaurantDetails;
