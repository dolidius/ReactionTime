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
        
        this.setState({ scores: scores.sort() });
    }

    render(){
        if(this.state.scores){
            return(
                <View style={styles.container}>
                    {this.state.scores.map((score, i) => <Text key={i} style={{color: '#ffffff'}}>{score}</Text>)}
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
    }
});

export default Highscores;