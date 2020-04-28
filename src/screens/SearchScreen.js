import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();


    const filterRestaurantByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price;
        })
    };

    return (
        // <View style={{ flex:1}}>
        <>
            <SearchBar
                term={term}
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermChange={setTerm}
                // onTermSubmit={ () => searchApi()}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantsList
                    restaurants={filterRestaurantByPrice('$')}
                    title="Cost Effective"/>
                <RestaurantsList
                    restaurants={filterRestaurantByPrice('$$')}
                    title="Bit Pricier"/>
                <RestaurantsList
                    restaurants={filterRestaurantByPrice('$$$')}
                    title="Big Spender"/>
            </ScrollView>
        {/*</View>*/}
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
