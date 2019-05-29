import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './components/mainScreens/Home';
import ReactionTest from './components/mainScreens/ReactionTest';
import Highscores from './components/mainScreens/Highscores';

const TabNavigator = createBottomTabNavigator(
    {
        Home,
        Highscores
    },

    {
        defaultNavigationOptions: {
            tabBarVisible: false
        }
    }
)

const AppNavigator = createStackNavigator(
    {
        TabNavigator,
        ReactionTest,
    },

    {
        defaultNavigationOptions: {
            header: null
        },
    }
);

export default createAppContainer(AppNavigator);