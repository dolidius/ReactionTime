import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

import ResultModal from '../modals/ResultModal';
import LoseModal from '../modals/LoseModal';

class ReactionTest extends Component {

    static getRandomNumber(min, max){
        return Math.floor((Math.random() * (max - min + 1) + min));
    }

    state = {
        isTouchable: false,
        turnsTime: null,
        isResultModalOpen: false,
        isLoseModalOpen: false,
        reaction: null
    }

    componentDidMount(){
        this.makeTouchable();
    }

    makeTouchable(){
        const time = ReactionTest.getRandomNumber(4, 8);

        this.timeout = setTimeout(() => {
            this.setState({ isTouchable: true, turnsTime: Date.now() });
        }, 1000 * time);
        
    }

    async addToHighscore(time){
        let scores;
            
        await AsyncStorage.getItem('scores')
            .then(req => JSON.parse(req))
            .then(json => scores = json)
            .catch(err => console.log(err));

        if(!scores){
            scores = [];
        }

        scores.push(time);            

        await AsyncStorage.setItem('scores', JSON.stringify(scores))
            .then(json => console.log(json))
            .catch(err => console.log(err));
    }

    backgroundPress = () => {
        if(this.state.isTouchable){
            const time = Date.now() - this.state.turnsTime;
            this.setState({
                reaction: time,
                isResultModalOpen: true
            });
            
            this.addToHighscore(time);
        }

        if(!this.state.isTouchable){
            this.setState({
                isLoseModalOpen: true
            })
        }

    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    closeResultModal = () => {
        this.setState({
            isResultModalOpen: false
        })
    }

    closeLoseModal = () => {
        this.setState({
            isLoseModalOpen: false
        })
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={this.backgroundPress}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: !this.state.isTouchable ? '#E50000' : '#0FFF00'
                }}>
                    <View>

                        <ResultModal visible={this.state.isResultModalOpen} time={this.state.reaction} closeModal={this.closeResultModal.bind(this)} />
                        <LoseModal visible={this.state.isLoseModalOpen} closeModal={this.closeLoseModal.bind(this)} />

                    </View>
                    
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>{!this.state.isTouchable && 'Click on the screen when it turns green'}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ReactionTest;