import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Text style={styles.heading}>Welcome to the ReactionTime App</Text>
                <Text style={styles.info}>Press start to test your reaction time!</Text>
                <View style={styles.btnContainer}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ReactionTest')} style={styles.startBtn}>
                        <Text style={styles.startBtn_text}>Start</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Highscores')} style={styles.bestBtn}>
                        <Text style={styles.bestBtn_text}>Highscores</Text>
                    </TouchableOpacity>

                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        color: '#ffffff',
        fontSize: 19
    },

    info: {
        color: '#ffffff',
        fontSize: 14,
    },

    btnContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },

    startBtn: {
        backgroundColor: '#DD2626',
        paddingVertical: 9,
        paddingHorizontal: 50,
        borderRadius: 5,
        marginRight: 3
    },

    startBtn_text: {
        color: '#ffffff'
    },

    bestBtn: {
        backgroundColor: '#DD2626',
        paddingVertical: 9,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginLeft: 3
    },

    bestBtn_text: {
        color: '#ffffff'
    }

});

export default withNavigation(Header);