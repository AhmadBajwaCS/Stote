import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from "../CustomButton";

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
        margin: 20,
        alignItems: "center",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#12131d',
        backgroundColor: '#fffc6e',
        flexDirection: 'row',
        marginVertical:7,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },

        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 25,

    },

    itemText:{
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#222431',
        maxWidth: "100%",
    },
    });

export default ClassComponent;
