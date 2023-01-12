import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const ClassComponent = (props) => {
    const [style, setStyle] = useState(styles);

    useEffect(() => {
            setStyle({
                ...style,
                item: {
                    paddingVertical:30,
                    paddingLeft:20,
                    justifyContent: 'space-between',
                    margin: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    flexDirection: 'row',
                    backgroundColor: props.color,
                },
            });
        }, [props.color]);

    return(
        <View style={style.item}>
            <TouchableOpacity style={styles.button}>
                <Text style={style.itemText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    itemText:{
        maxWidth: 80,
    },
    });

export default ClassComponent;
