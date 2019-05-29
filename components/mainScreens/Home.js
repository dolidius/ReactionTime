import React from 'react';
import { View } from 'react-native';

import Header from '../helpers/Header';

const Home = () => (
    <View style={{
        flex: 1,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Header />
    </View>
);

export default Home;