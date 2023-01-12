import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const ClassComponent = (props) => {
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
        backgroundColor: '#C7FBFF',
        flexDirection: 'row',
    },

    itemText:{
        maxWidth: 80,
    },
    });

export default ClassComponent;
