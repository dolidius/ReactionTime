import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './components/mainScreens/Home';
import ReactionTest from './components/mainScreens/ReactionTest';
import Highscores from './components/mainScreens/Highscores';

const AppNavigator = createStackNavigator(
    {
        Home,
        ReactionTest,
        Highscores
    },

    {
        defaultNavigationOptions: {
            header: null
        },
    }
);

export default createAppContainer(AppNavigator);