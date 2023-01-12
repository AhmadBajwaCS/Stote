import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import getRandomColor from '../RandomColorGenerator/RandomColorGenerator';
getRandomColor




const ClassComponent = (props) => {
    getRandomColor()
    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.itemText}>{props.text}</Text>
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
        backgroundColor: getRandomColor(),
        flexDirection: 'row',

    },
    itemText:{
        maxWidth: 80,

    },

    });

export default ClassComponent;
