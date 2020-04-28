import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                // onChangeText={newTerm => onTermChange(newTerm)} //Same result as the code bellow
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
