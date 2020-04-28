import React, { useState, useEffect } from 'react';
import yelp from "../api/yelp";

export default () => {

    const [restaurants, setRestaurants] = useState([]);
    const [ errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    // term: term, //same result as bellow
                    term: searchTerm,
                    location: 'san jose'
                }
            });

            setRestaurants(response.data.businesses);
            setErrorMessage('');

        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };

    //Run the search automatically only on first time screen is rendered
    useEffect(() => {
        searchApi('past')
    }, []);

    return [searchApi, restaurants, errorMessage];
};
