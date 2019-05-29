import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const ModalButtons = props => (
    <View style={styles.btnContainer}>

        <TouchableOpacity style={[styles.btn, styles.againBtn]} onPress={props.againPress}>
            <Text style={styles.btn_text}>Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.bestBtn]} onPress={props.highPress}>
            <Text style={styles.btn_text}>Highscores</Text>
        </TouchableOpacity>

    </View>
);

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        marginTop: 6
    },

    btn: {
        backgroundColor: '#DD2626',
        paddingVertical: 9,
        paddingHorizontal: 50,
        borderRadius: 5,
    },

    btn_text: {
        color: '#ffffff'
    },

    againBtn: {
        marginRight: 3
    },

    bestBtn: {
        marginLeft: 3
    }
});

export default ModalButtons