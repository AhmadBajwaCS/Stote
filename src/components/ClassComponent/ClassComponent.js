import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const ClassComponent = ({key, text, classColor}) => {
    return(
        <View style={[
            styles.item,
            classColor ? {backgroundColor: classColor} : {},
        ]}>
            <TouchableOpacity style= {[styles.button,]} >
                <Text style={styles.itemText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    item:{
        padding:25,
        justifyContent: 'space-between',
        margin: 10,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#fffc6e',
        flexDirection: 'row',
    },

    itemText:{
        textColor: 'white',
        maxWidth: 80,
    },
    });

export default ClassComponent;
