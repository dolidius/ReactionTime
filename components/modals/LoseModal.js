import React, { Component } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';

import ModalButtons from './ModalButtons';

class LoseModal extends Component {

    tryAgain = () => {
        this.props.closeModal();
        this.props.navigation.navigate('Home');
    }

    highPress = () => {
        this.props.closeModal();
        this.props.navigation.navigate('Highscores');
    }

    render(){
        return(
            <Modal animationType="slide" visible={this.props.visible} onRequestClose={() => this.props.navigation.navigate('Home')}>
                <View style={styles.container}>
                    <Text style={styles.info}>You pressed too early!</Text>
                    <ModalButtons againPress={this.tryAgain} highPress={this.highPress} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#545454',
    },

    info: {
        color: '#ffffff',
        fontSize: 22
    }
});

export default withNavigation(LoseModal);