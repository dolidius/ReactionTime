import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native';

class Highscores extends Component {

    state = {
        scores: null
    }

    async componentDidMount(){
        let scores;

        await AsyncStorage.getItem('scores')
            .then(req => JSON.parse(req))
            .then(json => scores = json)
            .catch(err => console.log(err));

        scores.sort((a,b) => a > b);
        scores = scores.slice(0, 10);

        this.setState({ scores });
    }

    render(){
        if(this.state.scores){
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>Highscore:</Text>
                    {this.state.scores.map((score, i) => (
                        <View key={i} style={{ flexDirection: 'row' }}>
                            <Text style={[styles.score, styles.count]}>{i + 1}. </Text>
                            <Text style={styles.score}>{score}</Text>
                        </View>
                    ))}
                </View>
            );
        }else{
            return (
                <View style={styles.container}>
                    <ActivityIndicator size={65} color="#ffffff" />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#545454',
    },

    title: {
        fontSize: 36,
        color: '#ffffff',
        marginBottom: 4
    },

    score: {
        color: '#ffffff',
        fontSize: 20,
        width: '50%'
    },

    count: {
        textAlign: 'right'
    }

});

export default Highscores;